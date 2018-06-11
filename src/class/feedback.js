/**
 * Created by Administrator on 2018/5/15.
 */
import {FEEDBACK_TYPE, REQ_URL} from './../const/const'
import $ from 'jquery'
import {voteAnswers} from './../api/request'

class Feedback {
  constructor(id, container) {
    this.id = id
    this.container = container
    this.hasSelected = false
    this.feedbackResult = 1
  }

  create() {
    this.el = $(
      `<div class="feedback-btn-container">
        <div class="feedback-btn ${FEEDBACK_TYPE.AGREE}-btn">
          <span class="icon-appreciate_fill_light"></span>
        </div>
        <div class="feedback-btn ${FEEDBACK_TYPE.DiSAGREE}-btn">
          <span class="icon-oppose_fill_light"></span>
        </div>
      </div>`)
    this.bindEvents()
    return this
  }

  add() {
    this.el.appendTo(this.container)
  }

  bindEvents() {
    let self = this
    this.el.find('.feedback-btn').click(function () {
      if(self.hasSelected){
        return
      }
      self.hasSelected = true
      let $target = $(this)
      if($target.hasClass(`${FEEDBACK_TYPE.DiSAGREE}-btn`)){
        self.feedbackResult = 0
      }
      $target.siblings().fadeOut(200,function () {
        $target.addClass('active')
      })
      self.sendFeedback(self.id,self.feedbackResult)
    })
  }

  sendFeedback(id, feedbackResult) {
    voteAnswers(id, feedbackResult)
  }
}

export default Feedback
