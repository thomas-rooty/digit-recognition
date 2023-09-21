import styled from "styled-components";
import PencilTools from "./PencilTools.jsx";
import BackgroundTools from "./BackgroundTools.jsx";
import HeightTools from "./HeightTools.jsx";
import WidthTools from "./WidthTools.jsx";
import ColorPencilTools from "./ColorPencilTools.jsx";

const ToolsBar = () => {

  return (
      <>
          <ContainerNavbar>
              <Container>
                  <LogoContainer>
                      <h1>GargamelDigits</h1>
                  </LogoContainer>
                  <ContainerToolsBar>
                      <ContainerTools>
                          <PencilTools/>
                          <ColorPencilTools/>
                          <BackgroundTools/>
                          <HeightTools/>
                          <WidthTools/>
                      </ContainerTools>
                  </ContainerToolsBar>
              </Container>
          </ContainerNavbar>
      </>
  )

}
export default ToolsBar;

const ContainerNavbar = styled.div`
    width: 100%;
`;

const Container = styled.div`
  display: flex;
  background-color: #fcf2e2;
  padding: 20px 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 10px;
  }
  H1 {
    font-family: 'Pacifico', cursive;
  }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    @media (max-width: 768px) {
      justify-content: center;
      margin-right: 0;
    }
`;

const ContainerToolsBar = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
`;

const ContainerTools = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    & > * {
    margin: 0 30px;
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        & > * {
          margin: 20px 25px;
        }
    }
`;

