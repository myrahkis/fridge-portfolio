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

    background-image: url("/ящики/ящик-бургер.png");
    background-size: 75% 70%;
    background-position: bottom;
    background-repeat: no-repeat;
    margin-bottom: -0.3rem;
    cursor: pointer;
    transition: all 120ms;

    &:hover {
      transform: scaleY(1.2) scaleX(1.1);
      margin-bottom: 0.7rem;
    }
  }
  .box2 {
    grid-row: 1 / 3;
    grid-column: 2 / -1;

    background-image: url("/ящики/ящик-арбуз.png");
    background-size: 75% 70%;
    background-position: bottom;
    background-repeat: no-repeat;
    margin-bottom: -0.3rem;
    cursor: pointer;
    transition: all 120ms;

    &:hover {
      transform: scaleY(1.2) scaleX(1.1);
      margin-bottom: 0.7rem;
    }
  }
  .box3 {
    grid-row: 3 / 5;
    grid-column: 1 / 2;

    background-image: url("/ящики/ящик-торт.png");
    background-size: 80% 70%;
    background-position: bottom;
    background-repeat: no-repeat;
    margin-bottom: -1rem;
    cursor: pointer;
    transition: all 120ms;

    &:hover {
      transform: translateY(1.5rem);
    }
  }
  .box4 {
    grid-row: 3 / 5;
    grid-column: 2 / -1;

    background-image: url("/ящики/ящик-лосось.png");
    background-size: 80% 70%;
    background-position: bottom;
    background-repeat: no-repeat;
    margin-bottom: -1rem;
    cursor: pointer;
    transition: all 120ms;

    &:hover {
      transform: translateY(1.5rem);
    }
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

  ${(props) =>
    props.position &&
    css`
      margin-bottom: -3.2rem;
    `}
`;

const ProjectName = styled.span`
  position: absolute;
  font-size: 1.5rem;

  &#good-soup {
    bottom: 13%;
    left: 40%;
  }

  &#tic-tac-toe {
    bottom: 19%;
    left: 28%;
    transform: rotate(30deg);
  }

  &#sassy-show-off {
    text-align: center;
    bottom: -12%;
    left: 34%;
    transform: rotate(30deg);
  }

  &#ukiyo {
    bottom: -7%;
    left: 38%;
  }

  &#quiz {
    bottom: -7%;
    left: 32%;
  }

  &#kinolog {
    bottom: -6%;
    left: 33%;
  }
`;

function FridgeOpened({ isOpen }) {
  return (
    <StyledFridgeOpened isOpen={isOpen}>
      <Inner>
        <div className="box1">
          <Container>
            <Sticker src="стикер.png" position="low" />
            <ProjectName id="kinolog">KinoLog</ProjectName>
          </Container>
        </div>
        <div className="box2">
          <Container>
            <Sticker src="стикер.png" position="low" />
            <ProjectName id="quiz">The Quiz</ProjectName>
          </Container>
        </div>
        <div className="box3">
          <Container>
            <Sticker src="стикер.png" position="low" />
            <ProjectName id="ukiyo">Ukiyo</ProjectName>
          </Container>
        </div>
        <div className="box4">
          <Container>
            <Sticker src="стикер.png" position="low" />
            <ProjectName id="sassy-show-off">
              sassy <br /> show off
            </ProjectName>
          </Container>
        </div>
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
