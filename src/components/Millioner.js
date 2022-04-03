import React from "react";

export default function Millioner(props){
  
const listMillion=(
    <ul>
        {props.billionaires.map((millioner)=>
        <li key={millioner.name}>
            {millioner.name}
        </li>
      
        )}
    </ul>
)
const listemail=(
    <ol>
        {props.billionaires.map((millioner)=>
        <li key={millioner.email}>{millioner.email}</li>
        )}
    </ol>
)
  
    return(
        <div>
            {listMillion}
            {listemail}
        </div>
       

    )
}