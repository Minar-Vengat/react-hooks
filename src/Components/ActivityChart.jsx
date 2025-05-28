import React from 'react';
import './ActivityChart.css';
const data = [
  ['Mon', [40, 60, 20]],
  ['Tues', [90, 70, 30]],
  ['Wed', [30, 50, 20]],
  ['Thurs', [60, 40, 20]],
  ['Fri', [90, 70, 60]],
  ['Sat', [30, 40, 20]],
  ['Sun', [70, 40, 20]],
];
const ActivityChart = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Activity</h3>
        <span>3 appointment on this week</span>
      </div>
      <div className="chart-bars">
        {data.map(([day, bars], index) => (
          <div className="day" key={index}>
            <div className="bars">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ActivityChart;