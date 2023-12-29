//폴더하위의 인텍스는 폴더를부르면 기본적으로 실행됨(~~/actions -> index.js실행)

import * as types from './actionTypes'

//액션생성자는 케멜케이스(소문자)로 작성, 각단어의시작은 대문자
export function increment() {
  return{
    type: types.INCREMENT
  }
}

export function decrement() {
  return{
    type: types.DECREMENT
  }
}

export function setColor(color) {
  return{
    type: types.SET_COLOR,
    color
  }
}