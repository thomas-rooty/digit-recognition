import {useTools} from "../contexts/ToolsContext.jsx";
import PaintBucketPng from "../assets/paint-bucket.png";
import {ContainerPencilTools} from "./PencilTools.jsx";
import ArrowDownPng from "../assets/arrow-down-sign-to-navigate.png";
import ArrowUpPng from '../assets/up-arrows.png';
import styled from "styled-components";
import {useState} from "react";
import {ChromePicker} from "react-color";
import {useCaptcha} from "../contexts/CaptchaContext.jsx";

const BackgroundTools = () => {

  const [openColorPicker, setOpenColorPicker] = useState(false);
  const {backgroundColor, setBackgroundColor} = useTools();
  const {handleCheckCaptcha, captchaDelock} = useCaptcha();

  return (
      <ContainerPencilTools>
        <img src={PaintBucketPng} alt="paint bucket"/>
        <DropDownImg
            src={openColorPicker ? ArrowUpPng : ArrowDownPng}
            alt="arrow down"
            onClick={() => {
              if (!captchaDelock) {
                handleCheckCaptcha();
              } else {
                setOpenColorPicker(!openColorPicker)
              }
            }}
        />
        {
          openColorPicker &&
            <ContainerChromePicker>
              <ChromePicker
                  color={backgroundColor}
                  onChange={(color) => {
                    setBackgroundColor(color.hex);
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

export default BackgroundTools;

const ContainerChromePicker = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 10px;
  margin-left: -100px;
  top: 50px;
`;
