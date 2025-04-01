import React, { memo } from "react";

interface MinuteHandProps {
  degree: number;
}

const MinuteHand: React.FC<MinuteHandProps> = ({ degree }) => {
  return (
    <div
      className="minute-hand"
      data-testid="minute-hand"
      style={{ transform: `rotate(${degree}deg)` }}
    ></div>
  );
};

export default memo(MinuteHand);
