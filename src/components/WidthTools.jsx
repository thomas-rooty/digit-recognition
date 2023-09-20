import WidthPng from '../assets/width.png';
import {ContainerActionsButtons, ContainerPencilTools, ContainerPencilToolsNumber} from "./PencilTools.jsx";
import {useTools} from "../contexts/ToolsContext.jsx";
import {useCaptcha} from "../contexts/CaptchaContext.jsx";

const WidthTools = () => {

  const {
    widthSize,
    setWidthSize,
  } = useTools();
  const {handleCheckCaptcha, captchaDelock} = useCaptcha();

  return (
      <ContainerPencilTools>
        <img src={WidthPng} alt="pencil" />
        <ContainerPencilToolsNumber>
          <h4>{widthSize}</h4>
          <ContainerActionsButtons>
            <button
                onClick={() => {
                  if (!captchaDelock) {
                    handleCheckCaptcha();
                  } else {
                    if (widthSize < 1500) {
                      setWidthSize(widthSize + 10)
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
                    if (widthSize > 10) {
                      setWidthSize(widthSize - 10)
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

export default WidthTools;
