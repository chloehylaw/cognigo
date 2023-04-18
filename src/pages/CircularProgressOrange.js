import React from "react";
import './progress.css';

const CircularProgressOrange = ({ progress }) => {
  const radius = 100; // radius of the circle
  const strokeWidth = 20; // width of the stroke
  const circumference = 2 * Math.PI * radius; // circumference of the circle
  const progressOffset = ((100 - 40) / 100) * circumference; // offset of the progress bar

  return (
    <svg
      className="progress-ring"
      width="100%"
      height="100%"
    >
      <circle
        className="progress-ring__circle"
        stroke="#ccc"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx="50%"
        cy="50%"
      />
      <circle
        className="progress-ring__circle"
        stroke="#D65354"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx="50%"
        cy="50%"
        style={{
          strokeDashoffset: progressOffset,
        }}
      />
      <text
        className="progress-ring__text"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#D65354"
        style={{fontSize: "2em"}}
      >
        {"250 pts"}
      </text>
    </svg>
  );
};

export default CircularProgressOrange;
