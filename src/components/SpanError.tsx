import React from "react";
import "../styles/SpanError.css";
function SpanError (props:{texterr:string}){
return (
<span className="block-form__span-error_second">{props.texterr}</span>
   
);
}
export default SpanError;