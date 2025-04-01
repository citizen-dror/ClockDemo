import React from "react";
import useClockTime from "../../hooks/useClockTime";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import "./AnalogClock.css";


const AnalogClock: React.FC = () => {
  const { hourDegree, minuteDegree, secondDegree } = useClockTime();

  return (
    <div className="clock">
      <div className="clock-face">
        <HourHand degree={hourDegree} />
        <MinuteHand degree={minuteDegree} />
        <SecondHand degree={secondDegree} />
        <div className="center-dot"></div>
      </div>
    </div>
  );
};

export default AnalogClock;
