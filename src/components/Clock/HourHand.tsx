import React, { memo } from "react";

interface HourHandProps {
  degree: number;
}

const HourHand: React.FC<HourHandProps> = ({ degree }) => {
  return (
    <div
      className="hour-hand"
      data-testid="hour-hand"
      style={{ transform: `rotate(${degree}deg)` }}
    ></div>
  );
};

export default memo(HourHand);
