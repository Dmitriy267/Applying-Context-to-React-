import React from "react";
import "../styles/SpanErrortel.css";
function SpanErrortel (props:{texterrtel:string}){
return (
<span className="block-form__span-error">{props.texterrtel}</span>
   
);
}
export default SpanErrortel;