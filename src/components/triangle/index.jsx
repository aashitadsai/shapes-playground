import React from "react";

const Triangle = (props = { color: "#e2d5e7", title: "Triangle" }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="120px" height="100px">
      <g>
        <polygon points="60,0 0,100 120,100" fill={props.color} />
        <text x="50%" y="75%" textAnchor="middle">
          {props.title}
        </text>
      </g>
    </svg>
  );
};

export default Triangle;