import React from "react"
import ReactDOM from "react-dom/client"

const elem = <span>React span</span>

const Title = () => (
 <h1 id="jsxheading" className="head" tabIndex="5">
    Namaste React Component 1</h1>
);
 
const reactelem = (
    <h1> {elem} React element using jsx</h1>
); 

const ReturnComp = () => {
    return <h1>Component with return statement</h1>
}

const num = 1000;
//Component composition
const HeadingComponent = () => (
    <div id="container">
    {reactelem}
    <h2>{num + 100}</h2>
    <Title/>
    <h1>Namaste react functional component 2</h1>
    <ReturnComp/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


