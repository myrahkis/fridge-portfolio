import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Fridge from "./features/fridge/Fridge";
import { device } from "./styles/adaptability";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  @media ${device.xs} {
    overflow: hidden;
  }
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Fridge />
    </StyledApp>
  );
}

export default App;
