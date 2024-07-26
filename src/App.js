import React, { Suspense, lazy, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About  from "./components/About"
import Error from "./components/Error"
import ContactUs from "./components/ContactUs"
import Cart from "./components/Cart.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"  
import UserContext from "./utils/UserContext.js"
import { useEffect } from "react"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"

const AppLayout = () => {
  const [username, setusername] = useState("");

  //authentication
  
  useEffect(() => {
  const data = {
    name: "Nafisha Thakur"
  }
  setusername(data.name);
  },[])

   return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : username , setusername}}>
      <div className="app">
        <Header/>
        <Outlet /> 
      </div>
      </UserContext.Provider>
    </Provider>
   )
 }


const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(()=>import("./components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <ContactUs />
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/grocery",
        element : (
        <Suspense fallback=
          {
          <h1>Loading</h1>
          }
        ><Grocery/></Suspense>
         ),
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />);


