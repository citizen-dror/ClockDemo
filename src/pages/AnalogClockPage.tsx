import React from "react";
import AnalogClock from "../components/Clock/AnalogClock";
import AlarmClock from "../components/Alarm/AlarmClock";

const AnalogClockPage: React.FC = () => {
  return (
    <div>
    <h1>Analog Clock</h1>
      <AlarmClock />
      <AnalogClock />      
    </div>
  );
};

export default AnalogClockPage;
