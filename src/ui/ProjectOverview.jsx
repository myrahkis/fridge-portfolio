import styled from "styled-components";

/* eslint-disable react/prop-types */
const StyledProjectOverview = styled.div`
  overflow: hidden;
  width: 100%;
  height: 75vh;
  border-radius: 2rem;
  background-color: pink;
`;

const Grid = styled.div`
  height: inherit;
  display: grid;
  grid-template-columns: 2fr 0.8fr;
`;

const Info = styled.div`
  padding: 2rem 2.5rem;
`;

function ProjectOverview({ projectInfo }) {
  const { name, gitDemo, gitLink, stack, desc } = projectInfo;

  return (
    <StyledProjectOverview>
      <Grid>
        <div>
          <iframe src={gitDemo} width="100%" height="100%"></iframe>
        </div>
        <Info>
          <h1 style={{ textTransform: "capitalize" }}>
            <a href={gitLink} target="_blank">
              {name}
            </a>
          </h1>
          <div>
            <h4>Стэк</h4>
            <p>{stack}</p>
          </div>
          <div>
            <h4>Описание</h4>
            <p>{desc}</p>
          </div>
        </Info>
      </Grid>
    </StyledProjectOverview>
  );
}

export default ProjectOverview;
