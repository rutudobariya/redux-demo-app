import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer/index'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import reportWebVitals from './reportWebVitals'
const store=createStore(

reducer, 
// add react redux in chrome extension using redux dev tools 
window.__REDUX_DEVTOOLS_EXTENSION__&&
window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
<Provider store={store} >
<App />
</Provider>,document.getElementById("root")
)

// reportWebVitals();



