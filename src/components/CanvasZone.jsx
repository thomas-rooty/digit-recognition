import styled from "styled-components";
import Canvas from "./Canvas.jsx";
import {useRef, useState} from "react";
import ResetButton from "./ResetButton.jsx";
import ValidateButton from "./ValidateButton.jsx";
import {API_URL, convertCanvasToImage, sweetAlert} from "../utils/index.js";

const CanvasZone = () => {

  const canvasRef = useRef(null);

  const [userHasDrawn, setUserHasDrawn] = useState(false);

  const handleResetCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  const handleSubmitCanvas = async () => {
    const image = await convertCanvasToImage(canvasRef);
    const formData = new FormData();
    formData.append("image", image);
    const response = await fetch(API_URL + "/recognize_digit/", {
      method: "POST",
      body: formData
    })
    const data = await response.json();

    handleResetCanvas();

    if (data.digit && data.confidence) {
      sweetAlert("predi", data.digit, data.confidence, data.id);
    } else {
      sweetAlert("error", data.error);
    }
  }



  return (
      <ContainerCanvasZone>
          <Canvas
              ref={canvasRef}
              setUserHasDrawn={setUserHasDrawn}
              isCaptcha={false}
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
  padding: 8rem 0;
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
