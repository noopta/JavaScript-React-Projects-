import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {ProductProvider} from './context';
import {ProductProviderMen} from './context2';
import {ProductProviderWomen} from './context3';
import * as serviceWorker from "./serviceWorker";
import './fonts/America.ttf';

ReactDOM.render(
	<ProductProviderWomen >
	<ProductProviderMen> 
	<ProductProvider> 
	
	<Router> 
	<App /> 
	</Router>

	</ProductProvider>
	</ProductProviderMen>
	</ProductProviderWomen>,

 document.getElementById("root")
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
