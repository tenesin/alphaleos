import React, { useEffect } from "react";
import { render, screen } from "@testing-library/react";
import { useFocus } from "../../hooks/useFocus";

function Input(props) {
  const [inputRef, setFocus] = useFocus();
  useEffect(() => {
    setFocus();
  }, []);

  return <input type="text" data-testid="input-element" ref={inputRef} />;
}

describe("Hooks", () => {
  it("useFocus can focus an element", () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId("input-element");
    expect(input).toHaveFocus();
  });
});
