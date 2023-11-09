// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
// import "@testing-library/jest-dom/extend-expect";
const { studentsData } = require("../data/students.json");

describe("Home", () => {
  const name = studentsData[0].name;
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Navisatya Student ID Finder/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the table", () => {
    const { getByText } = render(<Home />);
    const td = getByText(name);
    expect(td).toHaveTextContent(name);
  });
});
