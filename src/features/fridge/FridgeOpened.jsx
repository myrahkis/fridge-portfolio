import styled, { css } from "styled-components";
import Inner from "../../ui/Inner";
import ProjectBox from "./ProjectBox";
import projects from "../../data/projects";

const StyledFridgeOpened = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.4s;
  background-image: url("/холодос-открытый-последний.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  width: 100%;
  height: 100vh;
  transition: all 1s ease-out;

  ${(props) =>
    props.isOpen &&
    css`
      width: 100%;
      height: 100vh;
      opacity: 1;
    `}
`;

function FridgeOpened({ isOpen }) {
  return (
    <StyledFridgeOpened isOpen={isOpen}>
      <Inner>
        {projects.map((project) => (
          <ProjectBox
            key={project.project}
            projectInfo={project.infoExpanded}
            boxId={project.boxId}
            project={project.project}
            projectName={
              <p dangerouslySetInnerHTML={{ __html: project.projectName }} />
            }
            position={
              project.boxId !== "box6" && project.boxId !== "box7" && "low"
            }
          />
        ))}
      </Inner>
    </StyledFridgeOpened>
  );
}

export default FridgeOpened;
