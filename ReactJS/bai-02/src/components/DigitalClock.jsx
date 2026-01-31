import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

function DigitalClock() {
  
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
  
    const timerID = setInterval(() => {
      console.log("Clock updating..."); // Để kiểm tra effect đang chạy
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => {
      console.log("Cleaning up interval...");
      clearInterval(timerID);
    };
  }, []); 

  return (
    <div className="clock-container">
      <h3 className="clock-title">Digital Clock</h3>
      <p className="clock-time">{time}</p>
    </div>
  );
}

export default DigitalClock;