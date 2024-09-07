import RestaurantCard from "../RestaurantCard";
import {withPromotedlabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Pandit Ji Di Hatti");
    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
    const WrappedRestaurantCard = withPromotedlabel(RestaurantCard);
    render(<WrappedRestaurantCard resData={MOCK_DATA} />);
    const labelPromoted = screen.getByText("Promoted");
    expect(labelPromoted).toBeInTheDocument();
});