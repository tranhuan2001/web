import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
   appReducers,
   compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
