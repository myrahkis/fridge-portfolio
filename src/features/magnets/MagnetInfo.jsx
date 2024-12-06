import styled from "styled-components";

const StyledMagnetInfo = styled.div`
  background-image: url("notes.png");
  height: 62vh;
  width: 100%;
  background-repeat: no-repeat;
`;

function MagnetInfo({ magnet }) {
  return (
    <StyledMagnetInfo>
      <h1>{magnet}</h1>
    </StyledMagnetInfo>
  );
}

export default MagnetInfo;
