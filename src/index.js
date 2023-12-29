import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App'
import App from './components/app';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import reducers from './reducers';
//리엑트에서 리덕스를 더 편하게 쓸수있게 해주는 react-redux 에서 프로바이더(제공하다) 함수 가져오기
import { Provider } from 'react-redux';

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
