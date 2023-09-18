import styled from "styled-components";
import Canvas from "./Canvas.jsx";
import {useRef, useState} from "react";
import ResetButton from "./ResetButton.jsx";
import ValidateButton from "./ValidateButton.jsx";

const CanvasZone = () => {

  const canvasRef = useRef(null);

  const [userHasDrawn, setUserHasDrawn] = useState(false);

  const handleResetCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  const handleSubmitCanvas = async () => {
    const image = canvasRef.current.submitCanvas();
    console.log(image)
  }



  return (
      <ContainerCanvasZone>
        <Canvas
            ref={canvasRef}
            userHasDrawn={userHasDrawn}
            setUserHasDrawn={setUserHasDrawn}
        />
        {
          userHasDrawn &&
            <ActionsButtons>
              <ResetButton func={handleResetCanvas}>Réinitialiser</ResetButton>
              <ValidateButton func={handleSubmitCanvas}>Valider</ValidateButton>
            </ActionsButtons>
        }

      </ContainerCanvasZone>
  )
}

export default CanvasZone;

const ContainerCanvasZone = styled.div`
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;

const ActionsButtons = styled.div`
  margin-top: 20px;
  display: flex;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  align-items: center;
`;
