import React, { useState, useEffect } from 'react';
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🕒 Digital Clock</h2>
      <h1 style={{ fontSize: '48px', fontFamily: 'monospace' }}>
        {formatTime(time)}
      </h1>
    </div>
  );
}
export default DigitalClock;