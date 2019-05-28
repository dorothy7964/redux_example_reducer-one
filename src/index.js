import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Redux 연결 */
// createStore(데이터 보관 장소)를 Redux에서 가져온다.
import {createStore} from 'redux';

// React App에 Redux를 적용 할 때에는, react-redux 에 들어있는 Provider(공급자)를 사용
import {Provider} from 'react-redux';

// Redux파일을 스토어에 보관한 것을 상수 store에 넣기
import reducers from './reducers/number';
const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
