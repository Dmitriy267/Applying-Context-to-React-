import React, {useState, useEffect} from 'react';
export default function Counter(){
    const [counter, setCounter]=useState(0);
    const increment=()=>{
        setCounter(counter=>counter+1)
    }
  
    useEffect(()=>{
        document.title=`You clicked ${counter} times`
    })
    return(
        <div>
    
            <p>You clicked {counter} times</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}