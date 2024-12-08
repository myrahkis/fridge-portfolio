/* eslint-disable react/prop-types */
import magnets from "../../data/magnets";
import { device } from "../../styles/adaptability";
import styled from "styled-components";

const StyledMagnetInfo = styled.div`
  background-image: url("notes.png");
  height: 87vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 7rem;
  padding-right: 4rem;

  @media ${device.xl} {
    background-size: 100% 100%;
  }
  @media ${device.l} {
    background-size: 100% 100%;
  }
  @media ${device.m} {
    padding-top: 5rem;
    background-size: 100% 100%;
    height: 80vh;
  }
  @media ${device.xs} {
    padding: 5rem;
    padding-right: 1.5rem;
    padding-bottom: 6rem;
    background-size: 100% 100%;
    height: 80vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  width: 86%;
  transform: rotate(-4deg);

  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  scrollbar-color: lightgrey transparent; 

  @media ${device.xl} {
    width: 95%;
    margin: 0;
    margin-left: 3rem;
    height: 70vh;
    overflow-y: auto;
  }
  @media ${device.l} {
    width: 87%;
    margin-left: 3rem;
    height: 70vh;
    overflow-y: auto;
  }
  @media ${device.m} {
    width: 98%;
    margin-left: 2rem;
    height: 65vh;
    overflow-y: auto;
  }
  @media ${device.xs} {
    width: 90%;
    margin-left: 2rem;
    height: 65vh;
    overflow-y: auto;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: square inside;

  @media ${device.l} {
    gap: 0.5rem;
  }
  @media ${device.m} {
    gap: 0.5rem;
  }
`;

const Point = styled.li`
  padding-left: 1rem;
  font-size: ${(props) => (props.size === "about" ? "1.7" : "2")}rem;

  @media ${device.m} {
    font-size: 1.6rem;
  }
  @media ${device.xs} {
    font-size: 1.5rem;
  }
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

function MagnetInfo({ magnetId, nameRu, data }) {
  const [selected] = magnets.filter((magnet) => magnet.id === magnetId);
  const name = selected ? selected.name : nameRu;
  const info = selected ? selected.info : data;
  return (
    <StyledMagnetInfo>
      <Container>
        <h1>{name}</h1>
        <List>
          {info?.map((sentence, index) =>
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
