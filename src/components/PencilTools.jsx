import PencilPng from '../assets/pencil.png';
import styled from "styled-components";
import {useTools} from "../contexts/ToolsContext.jsx";
import {useCaptcha} from "../contexts/CaptchaContext.jsx";

const PencilTools = () => {

  const {pencilWidth, setPencilWidth} = useTools();
  const {handleCheckCaptcha, captchaDelock} = useCaptcha();

  return (
      <ContainerPencilTools>
        <img src={PencilPng} alt="pencil" />
        <ContainerPencilToolsNumber>
          <h4>{pencilWidth}</h4>
          <ContainerActionsButtons>
            <button
                onClick={() => {
                  if (!captchaDelock) {
                    handleCheckCaptcha();
                  } else {
                    if (pencilWidth < 15) {
                      setPencilWidth(pencilWidth + 1)
                    }
                  }
                }}
            >
              +
            </button>
            <button
                onClick={() => {
                  if (!captchaDelock) {
                    handleCheckCaptcha();
                  } else {
                    if (pencilWidth > 1) {
                      setPencilWidth(pencilWidth - 1)
                    }
                  }
                }}
            >
              -
            </button>
          </ContainerActionsButtons>

        </ContainerPencilToolsNumber>
      </ContainerPencilTools>
  )

}

export const ContainerPencilToolsNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ContainerPencilTools = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const ContainerActionsButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  margin-left: 10px;
  & button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
      
    &:hover {
      background-color: rgba(255, 140, 0, 1);
    }
  }
`;



export default PencilTools;