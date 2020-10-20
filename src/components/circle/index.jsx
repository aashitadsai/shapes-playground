import React from "react";

const Circle = (props = { color: "#f7cecc", title: "Circle" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      height="100px"
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="50" cy="50" r="50" fill={props.color} />
        <text x="50%" y="55%" textAnchor="middle">
          {props.title}
        </text>
      </g>
    </svg>
  );
};

export default Circle;
