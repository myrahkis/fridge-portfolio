/* eslint-disable react/prop-types */
import { createRef, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";

const StyledMagnets = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* background-color: aliceblue; */
`;

const Magnet = styled.span`
  cursor: pointer;
  position: absolute;
  /* border-radius: 50%; */
  /* z-index: 1; */

  &#magnet0 {
    top: 28rem;
    right: 6rem;

    width: 12rem;
    height: 8rem;
    background-image: url("магниты/magnet-git.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    transform: rotate(8deg);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.4) rotate(8deg);
    }
    &:active {
      transform: rotate(8deg);
    }
    /* &::before {
      content: "Github";
    } */
  }
  &#magnet1 {
    right: 12rem;
    bottom: 10rem;

    width: 7rem;
    height: 7rem;
    background-image: url("магниты/magnet-credits.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.4);
    }
    &:active {
      transform: none;
    }

    /* &::before {
      content: "Credits";
    } */
  }
  &#magnet2 {
    top: 4rem;
    right: 8rem;

    width: 7rem;
    height: 7rem;
    background-image: url("магниты/magnet-contacts.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.2s;
    transform: rotate(22deg);

    &:hover {
      transform: scale(1.4) rotate(22deg);
    }
    &:active {
      transform: rotate(22deg);
    }
  }
  &#magnet3 {
    left: 13rem;
    top: 21rem;

    width: 11rem;
    height: 11rem;
    background-image: url("магниты/magnet-about-me.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.2s;
    transform: rotate(-10deg);

    &:hover {
      transform: scale(1.4) rotate(-10deg);
    }
    &:active {
      transform: rotate(-10deg);
    }
    /* &::before {
      content: "Обо мне";
    } */
  }
  &#magnet4 {
    left: 18rem;
    bottom: 20rem;

    width: 8rem;
    height: 8rem;
    background-image: url("магниты/magnet-meme.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* &::before {
      content: "Мем";
    } */
  }
`;

function Magnets({ fridgeRef }) {
  const elementsCount = 5;
  const magnets = useRef([...Array(elementsCount)].map(() => createRef()));

  useEffect(
    function () {
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
    },
    [fridgeRef]
  );

  return (
    <StyledMagnets>
      {magnets.current.map((ref, index) => (
        <Magnet
          key={index}
          ref={ref}
          id={`magnet${index}`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Hello world!"
        ></Magnet>
      ))}
      <Tooltip id="my-tooltip" />
    </StyledMagnets>
  );
}

export default Magnets;
