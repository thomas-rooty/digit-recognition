import styled from "styled-components";
import PencilTools from "./PencilTools.jsx";
import BackgroundTools from "./BackgroundTools.jsx";
import HeightTools from "./HeightTools.jsx";
import WidthTools from "./WidthTools.jsx";
import ColorPencilTools from "./ColorPencilTools.jsx";

const ToolsBar = () => {

  return (
      <>
        <ContainerToolsBar>
          <ContainerTools>
            <PencilTools/>
            <ColorPencilTools/>
            <BackgroundTools/>
            <HeightTools/>
            <WidthTools/>
          </ContainerTools>
        </ContainerToolsBar>
      </>
  )

}
export default ToolsBar;

const ContainerToolsBar = styled.div`
    display: flex;
    height: 100px;
    background-color: white;
    width: 100%;
`;

const ContainerTools = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
  & > * {
    margin-left: 60px;
  }
`;

