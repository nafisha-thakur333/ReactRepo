import React from "react";

class UserClass extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        userinfo : {
         name : "dummyname",
         login : "dummylogin"
        }
    }  
    }

    async componentDidMount(){
      const data = await fetch("https://api.github.com/users/nafisha-thakur333");
      const json = await data.json();
      this.setState({
          userinfo:json
      });
      console.log(json);
  }

    render(){
         const {name, login, avatar_url} = this.state.userinfo;

        return (
            <div className="p-2 m-5 w-52 hover:cursor-pointer hover:border hover:border-black rounded-md
        shadow-md hover:scale-105">
             <img className="rounded-sm" src={this.state.userinfo.avatar_url}></img>
             <h2>Name : {this.state.userinfo.name}</h2>
             <h4>Contact : {this.state.userinfo.login}</h4>
            </div>
        )
    }
}

export default UserClass;