import styled, { css } from "styled-components";
import Inner from "../../ui/Inner";
import ProjectBox from "./ProjectBox";

const StyledFridgeOpened = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.4s;
  background-image: url("/холодос-открытый-последний.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  width: 100%;
  height: 100vh;
  transition: all 1s ease-out;

  ${(props) =>
    props.isOpen &&
    css`
      width: 100%;
      height: 100vh;
      opacity: 1;
    `}
`;

function FridgeOpened({ isOpen }) {
  return (
    <StyledFridgeOpened isOpen={isOpen}>
      <Inner>
        <ProjectBox
          boxId="box1"
          project="kinolog"
          position="low"
          projectName="KinoLog"
        />
        <ProjectBox
          boxId="box2"
          project="quiz"
          position="low"
          projectName="The quiz"
        />
        <ProjectBox
          boxId="box3"
          project="ukiyo"
          position="low"
          projectName="Ukiyo"
        />
        <ProjectBox
          boxId="box4"
          project="sassy-show-off"
          position="low"
          projectName={
            <p>
              Sassy <br /> show off
            </p>
          }
        />
        <ProjectBox
          boxId="box6"
          project="good-soup"
          projectName={
            <p>
              Good <br /> soup
            </p>
          }
        />
        <ProjectBox
          boxId="box7"
          project="tic-tac-toe"
          projectName="tic-tac-toe"
        />
      </Inner>
    </StyledFridgeOpened>
  );
}

export default FridgeOpened;
