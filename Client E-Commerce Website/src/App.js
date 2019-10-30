import React from "react";
import {Switch,Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import LandingPage from './components/LandingPage';
import MenProduct from './components/MenProductList';
import WomenProduct from './components/WomenProductList';



function App() {
  return (
	<React.Fragment>
	
	<Navbar/>
	<Switch> 
	
	<Route exact path = "/" component = {LandingPage} />
		<Route path="/landing" component={ProductList}/>
		<Route path="/details" component={Details}/>
		<Route path="/cart" component={Cart}/>
		
		<Route path = "/women" component = {WomenProduct} />
		<Route path = "/men" component = {MenProduct}/>
		<Route component={Default}/>
	</Switch>
	
	<Modal/>

	</React.Fragment>
  );
}

export default App;
