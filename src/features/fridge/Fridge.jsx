import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { device } from "../../styles/adaptability";
import Magnets from "../magnets/Magnets";
import FridgeOpened from "./FridgeOpened";

const StyledFridge = styled.div`
  position: relative;
  height: 100vh;
  width: 57rem;
  -moz-perspective: 110rem;
  -webkit-perspective: 110rem;
  perspective: 110rem;

  @media ${device.xl} {
    width: 40%;
  }
  @media ${device.l} {
    width: 50%;
  }
  @media ${device.m} {
    width: 60%;
  }
  @media ${device.s} {
    width: 80%;
  }
  @media ${device.xs} {
    width: 100%;
  }
`;

const FridgeClosed = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-image: url("/холодос-закрытый-последний.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
  transition: all 1s;
  height: 100vh;
  width: 100%;

  ${(props) =>
    props.isOpen &&
    css`
      cursor: pointer;
      transform: rotateY(120deg) translateX(10rem) scaleY(1.05) scaleX(1.01);
      transform-origin: right;

      @media ${device.s} {
        transform: rotateY(120deg) translateX(11rem) scaleY(1.05);
      }
    `}

  @media ${device.xl} {
    background-size: 100% 100%;
  }
  @media ${device.m} {
    background-size: 100% 100%;
  }
  @media ${device.s} {
    background-size: 100% 100%;
  }
  @media ${device.xs} {
    background-size: 100% 85%;
  }
`;

const Btn = styled.button`
  height: fit-content;
  background-color: transparent;
`;

const Handle = styled.img`
  height: 45rem;
  position: absolute;
  left: 10%;
  bottom: 5rem;
`;

function Fridge() {
  const [isOpen, setIsOpen] = useState(false);
  const fridgeRef = useRef(null);

  useEffect(
    function () {
      if (isOpen) {
        setTimeout(
          () =>
            (fridgeRef.current.style.backgroundImage = `url("открытая-дверца.png")`),
          330
        );
      } else {
        fridgeRef.current.style.backgroundImage = `url("холодос-закрытый-последний.png")`;
      }
    },
    [isOpen]
  );

  return (
    <StyledFridge>
      <FridgeClosed
        isOpen={isOpen}
        ref={fridgeRef}
        onClick={isOpen ? () => setIsOpen(false) : null}
      >
        {!isOpen && (
          <>
            <Magnets fridgeRef={fridgeRef} />
            <Btn onClick={() => setIsOpen((o) => !o)}>
              <Handle src="ручка-надпись-вертикальная.png" />
            </Btn>
          </>
        )}
      </FridgeClosed>
      <FridgeOpened isOpen={isOpen} />
    </StyledFridge>
  );
}

export default Fridge;
