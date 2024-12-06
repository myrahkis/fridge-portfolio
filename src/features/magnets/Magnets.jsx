/* eslint-disable react/prop-types */
import styled from "styled-components";
import Magnet from "../../ui/Magnet";
import MagnetsTooltips from "./MagnetsTooltips";
import useDraggingRefs from "../../hooks/useDraggingRefs";

const StyledMagnets = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function Magnets({ fridgeRef }) {
  const { elems: magnets } = useDraggingRefs(fridgeRef, 5);

  return (
    <StyledMagnets>
      {magnets.current.map((ref, index) => (
        <Magnet
          key={index}
          ref={ref}
          id={`magnet${index}`}
          data-tooltip-id={`magnet${index}`}
        ></Magnet>
      ))}

      <MagnetsTooltips />
    </StyledMagnets>
  );
}

export default Magnets;
