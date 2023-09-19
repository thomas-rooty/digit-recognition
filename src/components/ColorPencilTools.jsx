import {useTools} from "../contexts/ToolsContext.jsx";
import PencilPng from "../assets/pencil.png";
import {ContainerPencilTools} from "./PencilTools.jsx";
import ArrowDownPng from "../assets/arrow-down-sign-to-navigate.png";
import ArrowUpPng from '../assets/up-arrows.png';
import styled from "styled-components";
import {useState} from "react";
import {ChromePicker} from "react-color";

const ColorPencilTools = () => {

  const [openColorPicker, setOpenColorPicker] = useState(false);
  const {pencilColor, setPencilColor} = useTools();

  return (
      <ContainerPencilTools>
        <img src={PencilPng} alt="paint bucket"/>
        <ColorSelected
            color={pencilColor}
        />
        <DropDownImg
            src={openColorPicker ? ArrowUpPng : ArrowDownPng}
            alt="arrow down"
            onClick={() => setOpenColorPicker(!openColorPicker)}
        />
        {
            openColorPicker &&
            <ContainerChromePicker>
              <ChromePicker
                  color={pencilColor}
                  onChange={(color) => {
                    setPencilColor(color.hex);
                    setOpenColorPicker(false);
                  }}
              />
            </ContainerChromePicker>


        }
      </ContainerPencilTools>
  )
};

const DropDownImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-left: 10px;
`;

export default ColorPencilTools;

const ContainerChromePicker = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 10px;
  margin-left: -100px;
  top: 50px;
`;

const ColorSelected = styled.div`
  position: absolute;
  z-index: 2;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 1px solid black;
  margin-left: 10px;
  left : 10px;
  top : 30px
`;
