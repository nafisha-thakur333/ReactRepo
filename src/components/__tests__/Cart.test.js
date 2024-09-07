import {fireEvent, render, screen} from "@testing-library/react"
import {act} from "react";
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA from "../mocks/mockResMenu.json"
import {Provider} from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json : () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
});

it("Should load Restaurant Menu component", async () => {
    await act(async () => render(
      <BrowserRouter>
      <Provider store={appStore}>
       <Header/>
       <RestaurantMenu/>
       <Cart/>
      </Provider>
      </BrowserRouter>
    ));
     
    const accordianHeader = screen.getByText("Recommended (2)");

    fireEvent.click(accordianHeader);

    const items = screen.getAllByTestId("food-items");

    expect(items.length).toBe(2);

    const addButtons = screen.getAllByRole("button", {name : "Add"});
    
    fireEvent.click(addButtons[0]);

    expect(screen.getByText("Cart - (1)")).toBeInTheDocument();

    fireEvent.click(addButtons[1]);

    expect(screen.getByText("Cart - (2)")).toBeInTheDocument();

    const cartitems = screen.getAllByTestId("cart-items");

    expect(cartitems.length).toBe(2);

    fireEvent.click(screen.getByRole("button",{name : "Clear cart"}));

    expect(screen.getByText("Cart is empty ! Kindly add items to the cart.")).toBeInTheDocument();
})