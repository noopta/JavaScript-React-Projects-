import React from "react";
import styles from './landing.module.css';

export default function Title({name,title}){
	return(
		<div className="row">
			<div className = "col-10 mx-auto my-2 text-center text-title">
			<h1 className= {styles.testFont} > 
			{name} <strong className = "text-blue">{title}</strong>
			</h1>
			
			</div>
		</div>
	
	);
		
}