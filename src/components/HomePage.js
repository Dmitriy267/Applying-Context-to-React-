import React, {Component} from "react";
import UserContext from "../UserContext";

class HomePage extends Component{
    static contextType=UserContext
    render(){
        const {user, setUser}=this.context;
        return(
            <div>
                <button onClick={()=>{
                    const newUser={name: 'Joe', loggedIn:true}
                    setUser(newUser)
                }}>
                    Update User
                </button>
                <p>{`Current User: ${user.name}`}</p>
            </div>
        )
    }
}
export default HomePage