"use client"
import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [rotation, setRotation] = useState({
    second: 0,
    minute: 0,
    hour: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const dateData = new Date();
      const second = dateData.getSeconds() * 6;
      const minute = dateData.getMinutes() * 6;
      const hour = dateData.getHours() * 30;

      setRotation({
        second,
        minute,
        hour,
      });
    };

    const intervalId = setInterval(updateClock, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="shadow-inset" style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        position: 'relative',
      }}>
        <div className="hand hour bg-blue-800" style={{
          position: 'absolute',
          bottom: '50%',
          left: '50%',
          transformOrigin: 'bottom',
          transform: `translateX(-50%) rotate(${rotation.hour}deg)`,
          borderRadius: '30px',
          width: '3px',
          height: '20%',
        }}></div>
        <div className="hand minute bg-primary" style={{
          position: 'absolute',
          bottom: '50%',
          left: '50%',
          transformOrigin: 'bottom',
          transform: `translateX(-50%) rotate(${rotation.minute}deg)`,
          borderRadius: '30px',
          width: '3px',
          height: '25%',
        }}></div>
        <div className="hand second bg-primary" style={{
          position: 'absolute',
          bottom: '50%',
          left: '50%',
          transformOrigin: 'bottom',
          transform: `translateX(-50%) rotate(${rotation.second}deg)`,
          borderRadius: '30px',
          width: '3px',
          height: '35%',
        }}></div>
        <div className="bg-primary" style={{
          position: 'absolute',
          bottom: '46.5%',
          left: '47%',
          borderRadius: '50%',
          width: '10px',
          height: '10px',
        }}></div>

      </div>
    </div>
  );
};

export default Clock;
