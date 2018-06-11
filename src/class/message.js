/**
 * Created by Administrator on 2018/3/3.
 */
import $ from 'jquery'
import {postQuestionBySocket} from '../api/request'
import {MSG_TYPE} from '../const/const'
import Feedback from './feedback'

class Message {
  constructor(type, content, id, manualFlag) {
    this.type = type;
    this.content = content;
    this.id = id || ''
    this.manualFlag = manualFlag || false
  }

  create() {
    let content = this.content ? this.content : '抱歉,我暂时不能理解'
    this.el = $(`<div class=${this.type}>${content}</div>`)
    if(this.type === MSG_TYPE.SERVER && this.manualFlag && this.content){
      let feedBackBtn = new Feedback(this.id, this.el)
      feedBackBtn.create().add()
    }
    return this
  }

  add(container) {
    this.el.appendTo(container)
    $('.chat-wrapper').scrollTop($('.chat-wrapper')[0].scrollHeight);
    return this
  }

  send(projectId, sessionId, stompClient) {
    if (this.type === MSG_TYPE.CLIENT) {
      postQuestionBySocket({
        projectId: projectId || '',
        question: this.content,
        sender: sessionId
      }, stompClient)
    }
  }
}

export default Message
