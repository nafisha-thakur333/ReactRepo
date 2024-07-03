import UserContext from "../utils/UserContext";
import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{
    
    constructor(props){
        super(props) 
     }


    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Timer")
        }, 1000);
    }

    componentWillUnmount(){
       clearInterval(this.timer);
    }

    render(){
        return ( 
            <div>
            <h1 className="font-bold text-lg ml-5 p-2">About Us</h1>
            <UserContext.Consumer>
                {({loggedInUser}) => <h1 className="font-bold ml-5 p-2">{loggedInUser}</h1>}
            </UserContext.Consumer>
            <UserClass name={"First"} login={"nafisha-thakur333"}/>
            </div>
        )
        
   }
}

export default About