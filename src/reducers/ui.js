//counter의 배셩화면색상담당리듀서

import * as types from '../actions/actionTypes'

//초기상태작성
const initialState = {
  color : [255, 255, 255]
}

export default function ui(state = initialState, action) {
  console.log("ui here : ", state.color + ", ui action : " + action.type )
  switch(action.type){
    case types.SET_COLOR: 
      return { 
        ...state, 
        color: action.color
      };

   default:
      return state;
  }
}