import './style/reset.scss'
import './style/index.scss'
import $ from 'jquery'
import {MSG_TYPE} from './const/const'
import Message from './class/message'
import Chatbox from './class/chatbox'
import {getProjectList, getDirectAnswer, getUserSessionId} from './api/request'
import {goToPage, selectItem, initProjectList} from './util/util'


$(function () {
  //生成一个chatbox的全局实例
  let chatbox = new Chatbox()

  getUserSessionId(function (sessionId) {
    chatbox.sessionId = sessionId
    chatbox.stompClient.connect('guest', 'guest', function (frame) {
      chatbox.stompClient.subscribe(`/user/${chatbox.sessionId}/queue/chat`, function (res) {
        console.log('receive response')
        console.log(res.body)
        console.log(typeof res.body)
        let parseRes = JSON.parse(res.body)
        console.log(parseRes.answer)
        console.log(parseRes.logQaId)
        let msg = new Message('server', parseRes.answer, parseRes.logQaId, true)
        msg.create().add($('#chatWindow'))
      });
    })
  })

  //断开重连
  chatbox.sock.onclose = function () {
    console.log('websocket close!');
    setTimeout(function () {
      getUserSessionId(function (sessionId) {
        chatbox.sessionId = sessionId
        chatbox.stompClient.connect('guest', 'guest', function (frame) {
          chatbox.stompClient.subscribe(`/user/${chatbox.sessionId}/queue/chat`, function (res) {
            console.log('receive response')
            console.log(res.body)
            console.log(typeof res.body)
            let parseRes = JSON.parse(res.body)
            console.log(parseRes.answer)
            console.log(parseRes.logQaId)
            let msg = new Message('server', parseRes.answer, parseRes.logQaId, true)
            msg.create().add($('#chatWindow'))
          });
        })
      })
    },1000)
  }

  getProjectList(function (res) {
    console.log(res)
    let doms = initProjectList(res)
    console.log(doms)
    $('#proList').append(doms)
  })


  $('#enter').click(function () {
    goToPage(2)
  })

  $('#jump').click(function (e) {
    goToPage(3)
    chatbox.selectedTerm = undefined
  })


  //选择某个项目
  $(document).on('click', '.pro-item', function () {
    let $term = $(this).attr('data-id')

    chatbox.selectedTerm = $term

    selectItem($(this))
  })

  $('#next').click(function () {
    if (!chatbox.selectedTerm) {
      return
    }
    goToPage(3)
    chatbox.init(chatbox.selectedTerm)
  })

  $(document).on('click', '.chat-ques-item', function () {
    let $content = $(this).text(),
      $id = $(this).attr('data-id')
    console.log($id)
    let msg = new Message(MSG_TYPE.CLIENT, $content);
    msg.create().add($('#chatWindow'))
    getDirectAnswer($id, function (res) {
      let answer = new Message(MSG_TYPE.SERVER, res)
      answer.create().add($('#chatWindow'))
    })
  })

  $('#sendBtn').click(function () {
    var $inputbox = $('#inputbox'),
      $msgContent = $inputbox.val()
    if ($msgContent.trim().length === 0) {
      return
    }
    var msg = new Message(MSG_TYPE.CLIENT, $msgContent);
    msg.create().add($('#chatWindow')).send(chatbox.selectedTerm, chatbox.sessionId, chatbox.stompClient)
    $inputbox.val('')
  })

})
