/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { device } from "../../styles/adaptability";
import { useState } from "react";

const StyledProjectOverview = styled.div`
  overflow: hidden;
  width: 100%;
  height: 75vh;
  border-radius: 2rem;
  background-color: #6aaea3;
`;

const Grid = styled.div`
  height: inherit;
  display: grid;
  grid-template-columns: 2fr 0.8fr;

  @media ${device.m} {
    display: flex;
    flex-direction: ${(props) =>
      props.isOpenInfo ? "column" : "column-reverse"};
  }
`;

const Demo = styled.iframe`
  width: 100%;
  height: inherit;
  border: none;

  @media ${device.m} {
    display: ${(props) => props.isOpenInfo && "none"};
  }
`;

const InfoBtn = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  height: fit-content;
  width: fit-content;
  border-radius: 2rem;
  margin-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #005349;
  color: #6aaea3;

  @media ${device.m} {
    display: inline-flex;
  }
`;

const Info = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2.5rem;

  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  scrollbar-color: #005349 #6aaea3;

  @media ${device.m} {
    display: none;
    ${(props) =>
      props.isOpenInfo &&
      css`
        display: block;
        width: 100%;
        gap: 0.5rem;
        height: 100vh;
      `}
  }
`;

const H1 = styled.h1`
  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 3.35rem;
    `}

  @media ${device.m} {
    font-size: 3rem;
  }
`;

const Link = styled.a`
  transition: all 0.2s;

  &:link,
  &:visited {
    color: #004840;
    text-decoration: none;

    &:hover {
      color: #005349;
    }
  }

  &:active {
    color: #22695f;
  }
`;

const Text = styled.p`
  font-size: 1.9rem;
  margin-top: 0.5rem;

  @media ${device.m} {
    font-size: 1.5rem;
  }
`;

function ProjectOverview({ projectInfo, h1Size }) {
  const { name, gitDemo, gitLink, stack, desc } = projectInfo;
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <StyledProjectOverview>
      <Grid isOpenInfo={openInfo}>
        <Demo src={gitDemo} sandbox isOpenInfo={openInfo}></Demo>
        <InfoBtn onClick={() => setOpenInfo((open) => !open)}>
          {!openInfo ? (
            <span>&darr; Подробности</span>
          ) : (
            <span>&uarr; Подробности</span>
          )}
        </InfoBtn>
        <Info isOpenInfo={openInfo}>
          <H1 size={h1Size}>
            <Link href={gitLink} target="_blank" title={`${name} в github`}>
              {name}
            </Link>
          </H1>
          <div>
            <h3>Стэк</h3>
            <Text>{stack}</Text>
          </div>
          <div>
            <h3>Описание</h3>
            <Text>{desc}</Text>
          </div>
        </Info>
      </Grid>
    </StyledProjectOverview>
  );
}

export default ProjectOverview;
