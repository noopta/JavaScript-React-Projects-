import React, {Component} from "react";
import Product from "./MenProduct";
import Title from './Title';
import {ProductConsumer} from '../context2';
import styles from './landing.module.css';

export default class MenProductList extends Component{

	render(){
	
		return(
			<React.Fragment>
				<div className = "py-5">
				<div className = "container">
				<Title className = {styles.testFont} name = "Men's" title = "Products" />
				
				
				<div className = "row"> 
				<ProductConsumer>
				{(value)=>{
					return value.products.map( product => {
						return <Product key ={product.id} product = {product}  />;
					})
				} }
				</ProductConsumer>
				
				</div>
				</div>
				</div>

			</React.Fragment>
						//<Product/>
			
		)
	
	
	}
	
	
}