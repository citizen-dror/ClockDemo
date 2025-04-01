import React, { memo } from "react";

interface SecondHandProps {
  degree: number;
}

const SecondHand: React.FC<SecondHandProps> = ({ degree }) => {
  return (
    <div
      className="second-hand"
      data-testid="second-hand"
      style={{ transform: `rotate(${degree}deg)` }}
    ></div>
  );
};

export default memo(SecondHand);
