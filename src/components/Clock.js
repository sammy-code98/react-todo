
import React, { useEffect, useState } from "react";
import "../clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());
  const updateClock = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const timer = setInterval(updateClock, 1000);
    return function cleaner() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Time">
      <p style={{ margin: "3px" }}>{time.toLocaleTimeString("en-US")}</p>
    </div>
  );
}

export default Clock;
