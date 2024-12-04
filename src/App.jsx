import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Fridge from "./features/fridge/Fridge";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
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
