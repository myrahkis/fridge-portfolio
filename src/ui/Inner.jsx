import styled from "styled-components";

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

export default Inner;
