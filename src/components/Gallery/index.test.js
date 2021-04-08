import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "./index";

test("content test", () => {
    const { getByText } = render(<Gallery />);
    const content = getByText(/gallery/);
    expect(content).toHaveTextContent(
        "gallery"
    );
});