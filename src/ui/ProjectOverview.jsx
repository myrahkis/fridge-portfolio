import styled, { css } from "styled-components";

/* eslint-disable react/prop-types */
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
`;

const Demo = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2.5rem;
`;

const H1 = styled.h1`
  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 3.35rem;
    `}
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
`;

function ProjectOverview({ projectInfo, h1Size }) {
  const { name, gitDemo, gitLink, stack, desc } = projectInfo;

  return (
    <StyledProjectOverview>
      <Grid>
        <div>
          <Demo src={gitDemo} sandbox></Demo>
        </div>
        <Info>
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
