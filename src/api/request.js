/**
 * Created by Administrator on 2018/3/3.
 */
import axios from 'axios'
import $ from 'jquery'
import {REQ_URL} from './../const/const'

export function getInitQuestions(termId, cb) {
  axios.get(REQ_URL.GET_INIT_QUES + termId)
    .then(function (response) {
      console.log(response.data)
      if (cb) {
        cb(response.data)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function getDirectAnswer(id, cb) {
  axios.get(REQ_URL.GET_DIRECT_ANSWER + id)
    .then(function (response) {
      console.log(response.data)
      if (cb) {
        cb(response.data.answer)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function getProjectList(cb) {
  axios.get(REQ_URL.GET_PRO_LIST)
    .then(function (response) {
      console.log(response.data)
      if (cb) {
        cb(response.data)
      }
    }).catch(function (error) {
    console.log(error)
  })
}

export function postQuestion(param, cb) {
  console.log(param)
  axios.post(REQ_URL.POST_QUES, param)
    .then(function (response) {
      console.log(response.data)
      if (cb) {
        cb(response.data)
      }
    }).catch(function (error) {
    console.log(error)
  })
}

export function postQuestionBySocket(param, stompClient) {
  stompClient.send(REQ_URL.WEBSOCKET_POST_QUES, {}, JSON.stringify(param));
}

export function voteAnswers(id, feedbackResult) {
  let reqUrl = feedbackResult?REQ_URL.UP_VOTE:REQ_URL.DOWN_VOTE
  axios.get(reqUrl+id)
    .then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
  })
}

export function getUserSessionId(cb) {
  let reqUrl = REQ_URL.GET_USER_SESSIONID
  axios.get(reqUrl)
    .then(function (response) {
      console.log(`sessionId is: ${response.data.sessionId}`)
      cb(response.data.sessionId)
    }).catch(function (error) {
      console.log(error)
  })
}
