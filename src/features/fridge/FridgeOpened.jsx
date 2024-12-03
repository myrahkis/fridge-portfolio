import styled, { css } from "styled-components";

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
  transition: none;
  transition: all 3s;

  ${(props) =>
    props.isOpen &&
    css`
      width: 100%;
      height: 100vh;
      opacity: 1;
    `}
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  width: 65%;
  height: 70vh;
  margin-bottom: 4rem;

  .box1 {
    background-color: purple;
    width: 100%;
  }
  .box2 {
    background-color: orange;
  }
  .box3 {
    grid-column: 1 / -1;
    background-color: red;
  }
  .box4 {
    background-color: blue;
  }
  .box5 {
    background-color: green;
  }
  .box6 {
    background-color: pink;
  }
  .box7 {
    background-color: black;
  }
`;

function FridgeOpened({ isOpen }) {
  return (
    <StyledFridgeOpened isOpen={isOpen}>
      <Inner>
        <div className="box1">&nbsp;</div>
        <div className="box2">&nbsp;</div>
        <div className="box3">&nbsp;</div>
        <div className="box4">&nbsp;</div>
        <div className="box5">&nbsp;</div>
        <div className="box6">&nbsp;</div>
        <div className="box7">&nbsp;</div>
      </Inner>
    </StyledFridgeOpened>
  );
}

export default FridgeOpened;
