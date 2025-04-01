import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";
import AlarmClock from "../AlarmClock";
import useAlarm from "../../../hooks/useAlarm";

vi.mock("../../../hooks/useAlarm");

describe("AlarmClock", () => {
  it("should set the alarm when the button is clicked", () => {
    const mockSetAlarmTime = vi.fn();
    const mockHandleSetAlarm = vi.fn();

    (useAlarm as unknown as Mock).mockReturnValue({
      isAlarmSet: false,
      isAlarmTriggered: false,
      alarmTime: "08:00",
      setAlarmTime: mockSetAlarmTime,
      dismissAlarm: vi.fn(),
      snoozeAlarm: vi.fn(),
      handleSetAlarm: mockHandleSetAlarm,
      canSnooze: false,
    });

    render(<AlarmClock />);

    const timeInput = screen.getByTestId("alarm-time-input");
    const setAlarmButton = screen.getByTestId("set-alarm-button");

    fireEvent.change(timeInput, { target: { value: "07:30" } });
    fireEvent.click(setAlarmButton);

    expect(mockSetAlarmTime).toHaveBeenCalledWith("07:30");
    expect(mockHandleSetAlarm).toHaveBeenCalled();
  });

  it("should show the AlarmModal when the alarm is triggered", () => {
    (useAlarm as unknown as Mock).mockReturnValue({
      isAlarmSet: true,
      isAlarmTriggered: true,
      alarmTime: "08:00",
      setAlarmTime: vi.fn(),
      dismissAlarm: vi.fn(),
      snoozeAlarm: vi.fn(),
      handleSetAlarm: vi.fn(),
      canSnooze: true,
    });

    render(<AlarmClock />);

    expect(screen.getByText("Dismiss")).toBeInTheDocument();
  });
});
