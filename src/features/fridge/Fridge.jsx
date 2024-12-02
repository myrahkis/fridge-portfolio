import styled, { css } from "styled-components";
import Magnets from "./Magnets";
import { useRef, useState } from "react";

const StyledFridge = styled.div`
  position: relative;
  height: 100vh;
  width: 53rem;
  -moz-perspective: 110rem;
  -webkit-perspective: 110rem;
  perspective: 110rem;
`;

const FridgeClosed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: url("/холодос-закрытый-последний.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 1s;
  height: 100vh;
  width: 100%;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotateY(110deg) translateX(6rem) scaleY(1.05);
      transform-origin: right;

      background-image: none;
      background-color: seagreen;
    `}
`;

const FridgeOpened = styled.div`
  transition: all 0.4s;
  background-image: url("/холодос-открытый-последний.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  width: 100%;
  height: 100vh;
  transition: all 1s ease-in-out;
  /* opacity: 0; */
  /* width: 0;
  height: 0; */

  ${(props) =>
    props.isOpen &&
    css`
      width: 100%;
      height: 100vh;
      opacity: 1;
      /* opacity: 1; */
    `}
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

  return (
    <StyledFridge>
      <FridgeClosed isOpen={isOpen} ref={fridgeRef}>
        {!isOpen && (
          <>
            <Magnets fridgeRef={fridgeRef} />
          </>
        )}
        <Btn onClick={() => setIsOpen((o) => !o)}>
          <Handle src="/ручка.png" />
        </Btn>
      </FridgeClosed>
      <FridgeOpened isOpen={isOpen}>&nbsp;</FridgeOpened>
    </StyledFridge>
  );
}

export default Fridge;
