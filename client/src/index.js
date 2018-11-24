import 'materialize-css/dist/css/materialize.min.css';
import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk';


const store = createStore(reducers,{}, applyMiddleware(reduxThunk));

ReactDom.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'))

console.log('Environment is : ' + process.env.NODE_ENV);
console.log('Stripe key is : ' + process.env.REACT_APP_STRIPE_KEY);