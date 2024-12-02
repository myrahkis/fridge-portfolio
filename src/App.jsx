import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { useState } from "react";
// import img from './'
const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  width: 161rem;
  height: 100vh;
  background-color: aliceblue;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledApp>
      <GlobalStyles />
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", cursor: "pointer" }}
      >
        {isOpen ? (
          <img src="/холодос-открытый-с-ящиками.png" />
        ) : (
          <img src="/холодос-закрытый-готовый.png" />
        )}
      </div>
    </StyledApp>
  );
}

export default App;
