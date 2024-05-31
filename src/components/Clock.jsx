import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeExact = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(timeExact, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h2>Ora esatta: {currentTime.toLocaleTimeString()} </h2>;
};

export default Clock;
