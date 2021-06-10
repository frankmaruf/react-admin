import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import {Provider} from "react-redux";
import configureStore from './secure/redux/configureStore';

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.withCredentials =true

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
            <App/>
        </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
