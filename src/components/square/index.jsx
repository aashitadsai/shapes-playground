import React from "react";

const Square = (props = { color: "#FBE6CD", title: "Square" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect width="100%" height="100%" fill={props.color} />
        <text x="50%" y="55%" textAnchor="middle">
          {props.title}
        </text>
      </g>
    </svg>
  );
};

export default Square;
