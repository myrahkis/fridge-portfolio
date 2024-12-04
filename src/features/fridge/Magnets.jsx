/* eslint-disable react/prop-types */
import { createRef, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledMagnets = styled.div`
  position: relative;
  width: 100%;
`;

const Magnet = styled.span`
  cursor: pointer;
  position: absolute;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  z-index: 2;

  &#magnet0 {
    left: 50px;
    top: 50px;
    background-color: pink;
  }
  &#magnet1 {
    left: 100px;
    top: 100px;
    background-color: lightblue;
  }
  &#magnet2 {
    /* left: 150px;
    top: 150px; */
    background-color: lightgreen;
  }
  &#magnet3 {
    left: 200px;
    top: 200px;
    background-color: lightseagreen;
  }
`;

function Magnets({ fridgeRef }) {
  const elementsCount = 4;
  const magnets = useRef([...Array(elementsCount)].map(() => createRef()));

  useEffect(function () {
    function drag(magnet) {
      magnet.current.ondragstart = function () {
        return false;
      };

      magnet.current.onmousedown = function (event) {
        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
          const fridgeRect = fridgeRef.current.getBoundingClientRect();
          const localX = pageX - fridgeRect.left;
          const localY = pageY - fridgeRect.top;

          magnet.current.style.left =
            localX - magnet.current.offsetWidth / 2 + "px";
          magnet.current.style.top =
            localY - magnet.current.offsetHeight / 2 + "px";
        }

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        magnet.current.onmouseup = function () {
          document.removeEventListener("mousemove", onMouseMove);
          magnet.current.onmouseup = null;
        };
      };
    }

    magnets.current.forEach((magnet) => drag(magnet));

    // return () => {
    //   magnetsRefs.forEach((ref) => {
    //     ref.current = null; // Очистка рефов
    //   });
    // };
  }, [fridgeRef]);

  return (
    <StyledMagnets>
      {magnets.current.map((ref, index) => (
        <Magnet key={index} ref={ref} id={`magnet${index}`}></Magnet>
      ))}
    </StyledMagnets>
  );
}

export default Magnets;
