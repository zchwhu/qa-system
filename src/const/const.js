/**
 * Created by Administrator on 2018/3/3.
 */
export const MSG_TYPE = {
  CLIENT: 'client',
  SERVER: 'server'
}

export const FEEDBACK_TYPE = {
  AGREE: 'agree',
  DiSAGREE: 'disagree'
}

export const REQ_URL = {
  GET_USER_SESSIONID: '/c/sid',
  GET_PRO_LIST: '/c/projects',
  GET_INIT_QUES: '/c/qa/suggest/',
  POST_QUES: 'qa/search',
  GET_DIRECT_ANSWER: '/c/qa/answer/',
  WEBSOCKET_POST_QUES: '/scibot/c/chat',
  UP_VOTE: '/c/qa/upvote/',
  DOWN_VOTE: '/c/qa/downvote/'
}
