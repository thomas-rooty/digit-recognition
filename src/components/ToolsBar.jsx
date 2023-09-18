import styled from "styled-components";

const ToolsBar = () => {

  return (
      <>
        <ContainerToolsBar>
          <h1>ToolsBar</h1>
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

