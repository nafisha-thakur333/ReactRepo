import ContactUs from "../ContactUs";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () =>{
    it("Should load contact us component", () => {
        render(<ContactUs/>)
      
        const heading = screen.getByRole("heading");
      
        expect(heading).toBeInTheDocument();
    });
      
    it("Should load button inside contact us component", () => {
          render(<ContactUs/>)
        
          const button = screen.getByRole("button");
        
          expect(button).toBeInTheDocument();
    });
      
    it("Should load input name inside contact us component", () => {
          render(<ContactUs/>)
        
          const placeholder = screen.getByPlaceholderText("Name");
        
          expect(placeholder).toBeInTheDocument();
    });
      
    it("Should load 2 input boxes inside contact us component", () => {
          render(<ContactUs/>)
      
          //Querying
          const inputBoxes = screen.getAllByRole("textbox");
        
          expect(inputBoxes.length).toBe(2);
    });      
})
