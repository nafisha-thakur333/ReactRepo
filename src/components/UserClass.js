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
            <div className="user-card">
             <img className="user-img" src={this.state.userinfo.avatar_url}></img>
             <h2>Name : {this.state.userinfo.name}</h2>
             <h4>Contact : {this.state.userinfo.login}</h4>
            </div>
        )
    }
}

export default UserClass;