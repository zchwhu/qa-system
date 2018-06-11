/**
 * Created by Administrator on 2018/3/3.
 */
import $ from 'jquery'
import {getInitQuestions} from './../api/request'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

class Chatbox {
  constructor() {
    this.selectedTerm = undefined
    this.sessionId = undefined
    const sock = new SockJS('/ws');
    this.stompClient = Stomp.over(sock)
    this.sock = sock
  }

  init(termId) {
    getInitQuestions(termId,function (res) {
      let doms = $(this.createQuestion(res))
      $('#chatQuesList').append(doms)
      $('#chatQuesWrapper').show()
    }.bind(this))
  }

  createQuestion(list) {
    let doms = []
    for (let i = 0; i < list.length; i++) {
      doms.push(`<div class="chat-ques-item" data-id=${list[i].id}>${list[i].question}</div>`)
    }
    return doms.join('')
  }
}

export default Chatbox
