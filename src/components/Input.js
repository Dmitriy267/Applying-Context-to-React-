import React from "react";
import {Component} from "react";
class Input extends Component{
    render(){
        return <input type="text" onChange={this.props.update}/>
    }
}

export default Input;