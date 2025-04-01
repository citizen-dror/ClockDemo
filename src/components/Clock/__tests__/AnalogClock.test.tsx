import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AnalogClock from "../AnalogClock";
import '@testing-library/jest-dom';

vi.mock("../../../hooks/useClockTime", () => ({
  default: vi.fn(() => ({
    hourDegree: 90,
    minuteDegree: 180,
    secondDegree: 270,
  })),
}));

describe("AnalogClock Component", () => {
  it("renders clock hands with correct degrees", () => {
    render(<AnalogClock />);
    expect(screen.getByTestId("hour-hand")).toHaveStyle("transform: rotate(90deg)");
    expect(screen.getByTestId("minute-hand")).toHaveStyle("transform: rotate(180deg)");
    expect(screen.getByTestId("second-hand")).toHaveStyle("transform: rotate(270deg)");    
  });
});
