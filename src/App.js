import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About  from "./components/About"
import Error from "./components/Error"
import ContactUs from "./components/ContactUs"
import RestaurantMenu from "./components/RestaurantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"  

const AppLayout = () => {
   return (
    <div className="app">
     {<Header/>}
     {<Outlet />}
    </div>
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


