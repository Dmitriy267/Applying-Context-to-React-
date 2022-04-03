import React, {Component} from "react";

class PeopleSection extends Component{
    constructor(){
        super();
        this.state={
data:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response=>response.json())
        .then ((data)=>this.setState({data}))
    }
    render(){
        let data=this.state.data
        return(
            <div>
{data.map(data=>
<Person key={data.username} person={data}/>
    )}
            </div>
        )
 
    }
       
    
}
const Person =(props)=><p>{props.person.username}</p>
export default PeopleSection