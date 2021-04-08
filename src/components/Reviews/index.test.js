import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Reviews from "./index";

test("content test", () => {
    const { getByText } = render(<Reviews />);
    const content = getByText(/What do you think?/);
    expect(content).toHaveTextContent(
        "What do you think?"
    );
});