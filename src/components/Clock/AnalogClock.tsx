import React from "react";
import useClockTime from "../../hooks/useClockTime";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import { Card } from "../Common";
import "./AnalogClock.css";

const AnalogClock: React.FC = () => {
  const { hourDegree, minuteDegree, secondDegree } = useClockTime();

  return (
    <Card className="analog-clock-card">
      <Card.Body>
        <div className="clock">
          <div className="clock-face">
            <HourHand degree={hourDegree} data-testid="hour-hand" />
            <MinuteHand degree={minuteDegree} data-testid="minute-hand" />
            <SecondHand degree={secondDegree} data-testid="second-hand" />
            <div className="center-dot"></div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AnalogClock;