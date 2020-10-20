import React, { useState } from "react";
//components
import Circle from "./components/circle";
import Rect from "./components/rectangle";
import Square from "./components/square";
import Triangle from "./components/triangle";
import { AppWrapper, ShapeWrapper, OutputSection, Footer } from "./Style";
import { Tooltip } from "@material-ui/core";
import AddShapeForm from "./AddShapeForm";

export const Shapes = {
  Circle: "Circle",
  Rectangle: "Rectangle",
  Square: "Square",
  Triangle: "Triangle",
};

const App = () => {
  const [objects, setObject] = useState([
    {
      shape: Shapes.Circle,
      title: "Circle",
      color: "#f7cecc",
    },
    {
      shape: Shapes.Rectangle,
      title: "Rectangle",
      color: "#f5f5f5",
    },
    {
      shape: Shapes.Square,
      title: "Square",
      color: "#fbe6cd",
    },
    {
      shape: Shapes.Triangle,
      title: "Triangle",
      color: "#e2d5e7",
    },
  ]);
  const remove = (i) => {
    setObject(objects.filter((obj, j) => i !== j));
  };
  const add = (newShape) => {
    setObject([...objects, newShape]);
  };

  return (
    <AppWrapper>
      <AddShapeForm add={add} />
      <OutputSection>
        {objects.map((obj, i) => (
          <Tooltip title="Remove Shape" key={i}>
            <ShapeWrapper onClick={() => remove(i)}>
              {
                <>
                  {obj.shape === Shapes.Circle && (
                    <Circle color={obj.color} title={obj.title} />
                  )}
                  {obj.shape === Shapes.Rectangle && (
                    <Rect color={obj.color} title={obj.title} />
                  )}
                  {obj.shape === Shapes.Square && (
                    <Square color={obj.color} title={obj.title} />
                  )}
                  {obj.shape === Shapes.Triangle && (
                    <Triangle color={obj.color} title={obj.title} />
                  )}
                </>
              }
            </ShapeWrapper>
          </Tooltip>
        ))}
      </OutputSection>
      <Footer>Developed By - Aashita</Footer>
    </AppWrapper>
  );
};

export default App;
