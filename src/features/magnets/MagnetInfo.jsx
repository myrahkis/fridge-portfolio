/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledMagnetInfo = styled.div`
  background-image: url("notes.png");
  height: 87vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 7rem;
  padding-right: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  width: 86%;
  transform: rotate(-4deg);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: square inside;
`;

const Point = styled.li`
  padding-left: 1rem;
  font-size: ${(props) => (props.size === "about" ? "1.7" : "2")}rem;
`;

const Link = styled.a`
  text-decoration: none;
  transition: all 0.1s;

  &:link,
  &:visited {
    color: black;
  }

  &:hover {
    color: #258074;
  }

  &:active {
    color: #6aaea3;
  }
`;

function MagnetInfo({ name, data }) {
  return (
    <StyledMagnetInfo>
      <Container>
        <h1>{name}</h1>
        <List>
          {data?.map((sentence, index) =>
            name === "Контакты" ? (
              <Link href={sentence.link} key={index} target="_blank">
                <Point>{sentence.sent}</Point>
              </Link>
            ) : (
              <Point key={index} size="about">
                {sentence}
              </Point>
            )
          )}
        </List>
      </Container>
    </StyledMagnetInfo>
  );
}

export default MagnetInfo;
