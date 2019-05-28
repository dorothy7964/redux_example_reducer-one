// combineReducers 를 사용하여 하나의 리듀서로 합쳐 줄 수 있다.
import { combineReducers } from 'redux';

// 현재 상태
// App의 state라 생각 하면 된다.
// App의 state 와 달리 누구나 쓸 수 있다.
const initialState = {
  count : 20
}

// state에 initialState를 넣은 변수가 control
const control = (state = initialState) => {
  return state;
}

// control를 리듀서로 합쳐준 변수가 reducers
const reducers = combineReducers({
  control
});

// reducers를 내보내준다.
export default reducers;
