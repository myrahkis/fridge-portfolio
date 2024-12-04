/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import ProjectName from "../../ui/ProjectName";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

const Sticker = styled.img`
  width: 8rem;
  height: 7rem;
  margin-bottom: 1.1rem;

  ${(props) =>
    props.position &&
    css`
      margin-bottom: -3.2rem;
    `}
`;

function ProjectBox({ boxId, project, position, projectName }) {
  return (
    <div className={boxId}>
      <Container>
        <Sticker src="стикер.png" position={position} />
        <ProjectName id={project}>{projectName}</ProjectName>
      </Container>
    </div>
  );
}

export default ProjectBox;
