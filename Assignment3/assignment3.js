import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./Facebook-Logo.png";
import userIcon from "./user-icon.png";

//react createElement
const Header = React.createElement(
    "div", {className:"title"},
       [
        React.createElement("h1",{},"Heading of h1 tag"),
        React.createElement("h2",{},"Heading of h2 tag"),
        React.createElement("h3",{},"Heading of h3 tag"),
       ] 
    ,
)
const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX header
const JsxHeader = (<div className="title">
  <h1>JsxHeader h1 tag</h1>
  <h2>JsxHeader h2 tag</h2>
  <h3>JsxHeader h3 tag</h3>
</div>
)

const SpanComponent = () => (
   <span>Hello, I am span component</span>
);

//functional header
const FunctionalHeader = () => (
<div className="title">
  <h1 style={{color:"red"}} >FunctionalHeader h1 tag</h1>
  {<SpanComponent></SpanComponent>}
  <h2 style={{color:"green"}} >FunctionalHeader h2 tag</h2>
  <h3 style={{color:"blue"}} >FunctionalHeader h3 tag</h3>
</div>
);

const FinalComponent  = () => (
  <header className="header">
  <div className="left">
    <img src={logo}
     className="imgHeight" 
     alt="No logo available">
    </img>
  </div>  
  
  <div className="center">
    <input
      className="input"
      type="text"
      placeholder="Search anything."
    />
    <button type="submit">
      <i className="fa fa-search"></i>
    </button>
  </div>

  <div className="right">
    <img src={userIcon} alt="User Icon" />
  </div>
  </header>
);
root.render(<FinalComponent/>);

