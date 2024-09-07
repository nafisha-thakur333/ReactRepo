import Header from "../Header";
import {render, screen, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header Component with a login button",()=>{
  render(
  <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
  </BrowserRouter>
  )

  const loginButton = screen.getByRole("button",{name:"Login"});

  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with Cart items 0",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
          <Header/>
      </Provider>
    </BrowserRouter>
    )
  
    const cartcount = screen.getByText("Cart - (0)");
  
    expect(cartcount).toBeInTheDocument();
});

it("Should load Header Component with Cart",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
          <Header/>
      </Provider>
    </BrowserRouter>
    )
  
    const cartexist = screen.getByText(/Cart/);
  
    expect(cartexist).toBeInTheDocument();
});

it("Should change to login button to logout on click",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
          <Header/>
      </Provider>
    </BrowserRouter>
    )
  
    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton ).toBeInTheDocument();
});