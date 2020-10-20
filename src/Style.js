import styled from "styled-components";
import { AppBar, Button, FormControl } from "@material-ui/core";

export const ShapeWrapper = styled.div`
  padding: 20px;
  float: left;
  cursor: pointer;
`;
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    height: calc(100vh - 40px);
    padding: 20px;
  }
`;
export const FormSection = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-selft: center;
  position: relative;
  > * {
    margin-bottom: 30px;
    padding: 20px;
  }
`;

export const Header = styled(AppBar)`
  font-size: 22px;
  padding: 10px;
  position: absolute !important;
  top: 40px;
  width: calc(100% - 40px) !important;
  letter-spacing: 0.2px;
`;

export const OutputSection = styled.div`
  flex: 0.7;
  display: block;
  overflow: scroll; 
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-left: 1px solid #d3d3d3;
  border-radius: 5px;
//   background-color: #d3d3d33b;
`;

export const AddButton = styled(Button)`
  margin-top: 20px !important;
`;

export const ShapeDropdown = styled(FormControl)`
  margin-top: 100px !important;
`;

export const ColorPickerWrapper = styled.div`
  display: inline-grid;
`;

export const ColorPickerLabel = styled.span`
    margin-bottom: 10px; 
    color: #3f51b5;
    font-size: 16px;
`;

export const Footer = styled.span`
position: fixed !important;
bottom: 0;
right: 20px;
display: block;
height: 20px;
`