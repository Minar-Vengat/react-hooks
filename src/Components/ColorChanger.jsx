import React, { useState } from 'react';
const ColorChanger = () => {
  const [bgColor, setBgColor] = useState('lightgray');
  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'teal'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const handleChangeColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>ColorChanger Box</h2>
      <div
        style={{
          height: '200px',
          width: '200px',
          margin: 'auto',
          backgroundColor: bgColor,
          borderRadius: '10px',
          transition: '0.4s',
        }}
      ></div>
      <br />
      <button onClick={handleChangeColor} style={{ padding: '10px 20px' }}>
        Change Color
      </button>
    </div>
  );
};
export default ColorChanger;