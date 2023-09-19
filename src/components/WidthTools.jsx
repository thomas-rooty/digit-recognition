import WidthPng from '../assets/width.png';
import {ContainerActionsButtons, ContainerPencilTools, ContainerPencilToolsNumber} from "./PencilTools.jsx";
import {useTools} from "../contexts/ToolsContext.jsx";

const WidthTools = () => {

  const {
    widthSize,
    setWidthSize,
  } = useTools();

  return (
      <ContainerPencilTools>
        <img src={WidthPng} alt="pencil" />
        <ContainerPencilToolsNumber>
          <h4>{widthSize}</h4>
          <ContainerActionsButtons>
            <button
                onClick={() => {
                  widthSize < 1500 && setWidthSize(widthSize + 10)
                }}
            >
              +
            </button>
            <button
                onClick={() => {
                  widthSize > 10 && setWidthSize(widthSize - 10)
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
