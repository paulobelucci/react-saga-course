import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; 
import axios from 'axios'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';


const sagaMid = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMid))

sagaMid.run(rootSaga)

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  
);

