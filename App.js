import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",
{id:"heading", xyz:"abc"},
 "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
 <div id="parent">
   <div id = "child">
     <h1>I am h1 tag</h1>
     <h2>I am h2 tag</h2>
   </div>

   <div id = "child2">
     <h1>I am h1 tag</h1>
     <h2>I am h2 tag</h2>
   </div>
 </div>
 */

const parent = React.createElement("div",{id:"parent"}, [
        React.createElement("div",{id:"child"}, [
        React.createElement("h1",{id:"heading"},"Hi, I am H1 tag"),
        React.createElement("h2",{id:"heading2"},"Hi, I am H2 tag")
        ]),
        React.createElement("div",{id:"child2"}, [
        React.createElement("h1",{id:"heading"},"Hi, I am h1 tag"),
        React.createElement("h2",{id:"heading2"},"Hi, I am h2 tag")
        ])
    ]
);

//JSX

//ReactEleement(Object) => HTML(Browser Understands)
//render is converting from object to HTML
root.render(parent);

 