import React from "react";
import "../styles/TitleTelecomOperator.css";

function TitleTelecomOperator (props:{name:string}){
	return(
	      <h1>Оплатить за телефон {props.name}</h1>
		)
}

export default TitleTelecomOperator;
