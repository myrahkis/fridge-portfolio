import styled, { css } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { createRef, useEffect, useRef, useState } from "react";
// import img from './'
const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  width: 161rem;
  height: 100vh;
  /* background-color: aliceblue; */
`;

const Background = styled.div`
  background-image: ${(props) =>
    props.isOpen
      ? css`url("/холодос-открытый-с-ящиками.png")`
      : css`url("/холодос-закрытый-без-ручки.png")`};

  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const Btn = styled.button`
  height: fit-content;
  background-color: transparent;
`;

const Handle = styled.img`
  height: 45rem;
  position: absolute;
  left: 35.4%;
  bottom: 5rem;
`;

const Magnet = styled.span`
  position: absolute;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: pink;

  &#magnet0 {
    left: 50px;
    top: 50px;
  }
  &#magnet1 {
    left: 100px;
    top: 100px;
  }
  &#magnet2 {
    left: 150px;
    top: 150px;
  }
  &#magnet3 {
    left: 200px;
    top: 200px;
  }
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const elementsCount = 4;
  const magnets = useRef([...Array(elementsCount)].map(() => createRef()));

  console.log(magnets);

  // console.log(magnet);

  // const setCallbackRef = (index) => (magnet) => {
  //   magnets[index].current = magnet;

  //   magnet.ondragstart = function () {
  //     return false;
  //   };

  //   magnet.onmousedown = function (event) {
  //     moveAt(event.pageX, event.pageY);

  //     function moveAt(pageX, pageY) {
  //       magnet.style.left = pageX - magnet.offsetWidth / 2 + "px";
  //       magnet.style.top = pageY - magnet.offsetHeight / 2 + "px";
  //     }

  //     function onMouseMove(event) {
  //       moveAt(event.pageX, event.pageY);
  //     }

  //     document.addEventListener("mousemove", onMouseMove);

  //     magnet.onmouseup = function () {
  //       document.removeEventListener("mousemove", onMouseMove);
  //       magnet.onmouseup = null;
  //     };
  //   };
  //   // Лучшее место для DOM-операций
  // };

  useEffect(function () {
    const magnetsRefs = magnets.current;

    function drag(magnet) {
      magnet.current.ondragstart = function () {
        return false;
      };

      magnet.current.onmousedown = function (event) {
        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
          magnet.current.style.left =
            pageX - magnet.current.offsetWidth / 2 + "px";
          magnet.current.style.top =
            pageY - magnet.current.offsetHeight / 2 + "px";
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

      // function listener(e) {
      //   magnet.current.style.left = e.pageX - 50 + "px";
      //   magnet.current.style.top = e.pageY - 50 + "px";
      // }

      // magnet.current.addEventListener("mousedown", (e) => {
      //   document.addEventListener("mousemove", listener);
      // });

      // magnet.current.addEventListener("mouseup", (e) => {
      //   document.removeEventListener("mousemove", listener);
      // });
    }

    magnets.current.forEach((magnet) => drag(magnet));

    // return () => {
    //   magnetsRefs.forEach((ref) => {
    //     ref.current = null; // Очистка рефов
    //   });
    // };
  }, []);

  return (
    <StyledApp>
      <GlobalStyles />
      <Background isOpen={isOpen}>
        <div>
          {magnets.current.map((ref, index) => (
            <Magnet key={index} ref={ref} id={`magnet${index}`}></Magnet>
          ))}
          {/* <Magnet ref={magnet}></Magnet>
          <Magnet ref={magnet}></Magnet>
          <Magnet ref={magnet}></Magnet>
          <Magnet ref={magnet}></Magnet> */}
        </div>
        <Btn onClick={() => setIsOpen((o) => !o)}>
          <Handle src="/ручка.png" />
        </Btn>
      </Background>
    </StyledApp>
  );
}

export default App;
