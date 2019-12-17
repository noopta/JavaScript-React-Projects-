import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Displays from './components/Displays';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
    <Switch> 
		<Route exact path = "/" component = {Home} />
    <Route exact path = "/daily" component = {Landing} />
    <Route exact path = "/results" component = {Displays} />
	</Switch>

	</React.Fragment>



  );
}

export default App;
