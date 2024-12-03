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
  grid-template-rows: repeat(8, 1fr);

  width: 65%;
  height: 70vh;
  margin-bottom: 4rem;

  .box1 {
    grid-row: 1 / 3;
    background-color: purple;
  }
  .box2 {
    grid-row: 1 / 3;
    grid-column: 2 / -1;
    background-color: orange;
  }
  .box3 {
    grid-row: 3 / 5;
    grid-column: 1 / 2;
    background-color: red;
  }
  .box4 {
    grid-row: 3 / 5;
    grid-column: 2 / -1;
    background-color: blue;
  }
  .box6 {
    grid-row: 6 / -1;

    background-image: url("/ящики/ящик-помидоры.png");
    background-size: 100% 90%;
    background-position: bottom;
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover {
      background-image: url("/ящики/ящик-помидоры-безкр.png");
      transform: translateY(1.5rem);
    }
  }
  .box7 {
    grid-row: 6 / -1;
    grid-column: -2 / -1;
    background-image: url("/ящики/ящик-кабачки.png");
    background-size: 100% 95%;
    background-position: bottom;
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover {
      background-image: url("/ящики/ящик-кабачки-безкр.png");
      transform: translateY(1.5rem);
    }
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

const Sticker = styled.img`
  width: 8rem;
  height: 7rem;
  margin-bottom: 1.1rem;
`;

const ProjectName = styled.span`
  position: absolute;
  font-size: 1.5rem;

  &#good-soup {
    bottom: 16%;
    left: 37%;
  }

  &#tic-tac-toe {
    bottom: 20%;
    left: 27%;
    transform: rotate(30deg);
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
        <div className="box6">
          <Container>
            <Sticker src="стикер.png" />
            <ProjectName id="good-soup">
              Good <br /> Soup
            </ProjectName>
          </Container>
        </div>
        <div className="box7">
          <Container>
            <Sticker src="стикер.png" />
            <ProjectName id="tic-tac-toe">Tic tac toe</ProjectName>
          </Container>
        </div>
      </Inner>
    </StyledFridgeOpened>
  );
}

export default FridgeOpened;
