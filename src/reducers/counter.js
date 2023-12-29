//리듀서에서는 이전값과 액션을 받아 새로운상태를 반환

import * as types from '../actions/actionTypes'

//초기상태작성
const initialState = {
  number : 0,
  obj: {
    a: 1,
    b: 2
  }
}

export default function counter(state = initialState, action) {
  console.log("here : ", state.number + ", action : " + action.type )
  switch(action.type){
    case types.INCREMENT: 
      return { 
        ...state, 
        number: state.number + 1,
        obj: {...state.obj , a: 3}
      };
    
    case types.DECREMENT:
      return { 
        ...state, 
        number: state.number - 1,
        obj: {...state.obj , a: 1}
      };

   default:
    return state;
  }
}