import HeightPng from '../assets/height.png';
import {ContainerActionsButtons, ContainerPencilTools, ContainerPencilToolsNumber} from "./PencilTools.jsx";
import {useTools} from "../contexts/ToolsContext.jsx";
import {useCaptcha} from "../contexts/CaptchaContext.jsx";

const HeightTools = () => {

  const {
    heigthSize,
    setHeigthSize,
  } = useTools();
  const {handleCheckCaptcha, captchaDelock} = useCaptcha();

  return (
      <ContainerPencilTools>
        <img src={HeightPng} alt="pencil" />
        <ContainerPencilToolsNumber>
          <h4>{heigthSize}</h4>
          <ContainerActionsButtons>
            <button
                onClick={() => {
                  if (!captchaDelock) {
                    handleCheckCaptcha();
                  } else {
                    if (heigthSize < 650) {
                      setHeigthSize(heigthSize + 10)
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
                    if (heigthSize > 10) {
                      setHeigthSize(heigthSize - 10)
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

export default HeightTools;
