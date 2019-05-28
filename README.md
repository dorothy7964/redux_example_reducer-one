# react-router-dom

항상 하위 컴포넌트에게 주는 3가지 정보를 가지고 있다.


## Installation

```sh
# npm
npm install --save redux react-redux
```

### `redux`
리덕스만을 위한것

### `react-redux`

리액트에서 리덕스를 사용할 수있게 한다.

## Redux 연결

```javascript
import { createStore } from 'redux';
```

createStore(데이터 보관 장소)를 리덕스에서 가져온다.


```javascript
import { Provider } from 'react-redux';
```

리액트 앱에 리덕스를 적용 할 때에는, react-redux 에 들어있는 **Provider(공급자)** 를 사용


```javascript
import reducers from './reducers/number';
const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
```

리덕스파일을 스토어에 보관 한 것을 상수 store에 넣기.

## reducers
```javascript
// combineReducers 를 사용하여 하나의 리듀서로 합쳐줄 수 있습니다. 					
import { combineReducers } from 'redux';					

// 현재상태		
// App의 state라 생각하면 된다.		
// App의 state와 달리 누구나 쓸 수 있다.		
const initialState = {		 
  count : 20			        
}			                     

// state에 initialState를 넣은 변수가 control
const control = (state = initialState) => {
  return state;					
}					

// control를 리듀서로 합쳐준  변수가 reducers
const reducers = combineReducers({					
  control					
});					

// reducers를 내보내준다.
export default reducers;					
```

## connect

리듀서와 컴포넌트 연결해주기

`import { connect } from 'react-redux';`

```javascript
const mapStateToProps = (state) => {					
  return{					
	//control -> state=initialState
  	open : state.control.count				
  }					
}					
```					

```javascript			
export default connect(mapStateToProps,null)(A2);
```
* 첫번째 파라미터 - **mapStateToProps**
  * 데이터 가져오는 부분

+ 두번째 파라미터 - null
  + 액션 가져오는 부분
