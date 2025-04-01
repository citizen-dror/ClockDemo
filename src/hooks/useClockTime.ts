import { useState, useEffect } from "react";

const useClockTime = () => {
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

  return { hourDegree, minuteDegree, secondDegree };
};

export default useClockTime;