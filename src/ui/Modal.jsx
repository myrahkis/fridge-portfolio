import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { device } from "../styles/adaptability";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width + "%"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  border-radius: 2rem;

  /* @media ${device.xl} {
    top: 45%;
  } */
  @media ${device.m} {
    width: 65%;
    height: 75vh;
  }
  /* 
  }
  @media ${device.l} {
    width: 43%;
    height: 75vh;
  }
    */
  @media ${device.s} {
    width: 75%;
    height: 75vh;
  }
  @media ${device.xs} {
    width: 80%;
    height: 75vh;
  }
`;

const Blur = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.521);
  backdrop-filter: blur(2px);
`;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: fit-content;
  align-self: flex-end;
  margin-top: 2rem;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 0.5rem 1rem;
  background-color: #a23a4a;
  border: none;
  border-radius: 1rem;
  color: #6aaea3;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a21a2f;
  }

  /* @media ${device.xl} {
    right: 15%; 
  } */
  @media ${device.xs} {
    right: 2rem;
    padding: 1rem;
  }
`;

const ModalContex = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContex.Provider value={{ openName, close, open }}>
      {children}
    </ModalContex.Provider>
  );
}

function Window({ children, name, width }) {
  const { openName, close } = useContext(ModalContex);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Blur>
      <StyledModal ref={ref} width={width}>
        <Close onClick={close}>X</Close>
        {cloneElement(children, { onClose: close })}
      </StyledModal>
    </Blur>,
    document.body
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContex);

  return cloneElement(children, { onClick: () => open(opens) });
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
