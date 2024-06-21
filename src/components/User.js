import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(2);

    const {name, location, email} = props;
    return (
        <div className="user-card">
         <h2>Name : {name}</h2>
         <h3>Location : {location}</h3>
         <h4>Contact : {email}</h4>
         <h5>Count 1 : {count}</h5>
         <h5>Count 2 : {count2}</h5>
        </div>
    )
}

export default User;