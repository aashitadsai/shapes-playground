import React, { useState } from "react";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { ChromePicker } from "react-color";
import { Shapes } from "./App";
import {
  FormSection,
  Header,
  AddButton,
  ShapeDropdown,
  ColorPickerLabel,
  ColorPickerWrapper,
} from "./Style";

const AddShapeForm = (props) => {
  const [color, setColor] = useState("#f5f5f5");
  const [title, setTitle] = useState("");
  const [shape, setShape] = useState(Shapes.Circle);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const pickShape = (event) => {
    setShape(event.target.value);
  };

  const pickTitle = (event) => {
    setTitle(event.target.value);
  };

  const pickColor = (color) => {
    setColor(color.hex);
  };

  const add = () => {
    props.add({
      color,
      title,
      shape,
    });
  };

  return (
    <FormSection>
      <Header position="static">Shapes Playground</Header>
      <ShapeDropdown variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Choose Shape
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={shape}
          onChange={pickShape}
          label="Choose Shape"
        >
          {Object.values(Shapes).map((shape, i) => (
            <MenuItem value={shape} key={i}>
              {shape}
            </MenuItem>
          ))}
        </Select>
      </ShapeDropdown>
      <ColorPickerWrapper>
        <ColorPickerLabel>Choose Color </ColorPickerLabel>
        <ChromePicker color={color} onChange={pickColor} disableAlpha={true} />
      </ColorPickerWrapper>
      <TextField
        label="Shape Title"
        type="Text"
        variant="outlined"
        onChange={pickTitle}
        defaultValue={title}
        required
      />
      <AddButton
        variant="contained"
        color="primary"
        onClick={add}
        disabled={!title}
      >
        Add
      </AddButton>
    </FormSection>
  );
};

export default AddShapeForm;
