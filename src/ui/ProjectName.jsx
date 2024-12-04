import styled from "styled-components";

const ProjectName = styled.span`
  position: absolute;
  font-size: 1.5rem;

  &#good-soup {
    bottom: 13%;
    left: 40%;
  }

  &#tic-tac-toe {
    bottom: 19%;
    left: 28%;
    transform: rotate(30deg);
  }

  &#sassy-show-off {
    text-align: center;
    bottom: -12%;
    left: 34%;
    transform: rotate(30deg);
  }

  &#ukiyo {
    bottom: -7%;
    left: 38%;
  }

  &#quiz {
    bottom: -7%;
    left: 32%;
  }

  &#kinolog {
    bottom: -6%;
    left: 33%;
  }
`;

export default ProjectName;
