import ResetPng from '../assets/delete.png';
import styled from "styled-components";

const ResetButton = ({func}) => {

  return (
      <ContainerResetButton>
        <ResetImg src={ResetPng} alt="reset" onClick={func}/>
      </ContainerResetButton>
  )

}

const ResetImg = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const ContainerResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border : 4px solid rgba(255, 140, 0, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default ResetButton;