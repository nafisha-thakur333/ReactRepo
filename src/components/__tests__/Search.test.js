import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_RESDATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mocking the global fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json : () => {
        return Promise.resolve(MOCK_RESDATA);
      },
    });
});
  
it("Should Search Res List with Pizza Input", async () => {
    await act(async () => 
      render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(17);

    const searchbtn = screen.getByRole("button", {name: "Search"})
    
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target : {value : "pizza"}});


    fireEvent.click(searchbtn);

    //screen should load 2 res card

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    expect(cardsAfterSearch.length).toBe(8);
});

it("Should Filter Top Rated Restaurant", async () => {
    await act(async () => 
      render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(17);

    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedButton);

    //screen should load 2 res card
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2);
});