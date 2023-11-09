import { render, screen } from "@testing-library/react";
import Table from "../../components/Table";
const { studentsData } = require("../../data/students.json");
// import "@testing-library/jest-dom/extend-expect";

describe("Table", () => {
  it("renders a table", () => {
    const name = studentsData[0].name;
    const { getByText } = render(<Table students={studentsData} />);
    const td = getByText(name);
    expect(td).toHaveTextContent(name);
  });
});
