/**
 * Created by Administrator on 2018/3/3.
 */
import $ from 'jquery'

export function goToPage(pageNum) {
  let $el = $('#inner')
  $el.removeClass().addClass(`onpage${pageNum}`)
}

export function selectItem(el) {
  el.addClass('active')
    .siblings()
    .removeClass('active')
  $('#next').addClass('active')
}

export function initProjectList(list) {
  let doms = []
  for (let i = 0; i < list.length; i++) {
    doms.push(`<div class="pro-item" data-id=${list[i].id}>${list[i].proName}</div>`)
  }
  console.log(doms)
  return doms.join('')
}

