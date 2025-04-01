import React, { useEffect, useState } from "react";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import "./AnalogClock.css";

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation degrees for each hand
  const hourDegree = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegree = minutes * 6;
  const secondDegree = seconds * 6;

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
