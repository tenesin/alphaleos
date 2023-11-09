import React, { useEffect } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useKeyPress } from "../../hooks/useKeyPress";

describe("Hooks", () => {
  it("useKeyPress can detect element is pressed", () => {
    const { result } = renderHook(() => useKeyPress("k"));
    expect(result.current).toBe(false);
    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "k" }));
    });
    expect(result.current).toBe(true);
  });
});
