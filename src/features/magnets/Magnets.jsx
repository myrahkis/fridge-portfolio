/* eslint-disable react/prop-types */
import styled from "styled-components";
import Magnet from "../../ui/Magnet";
import MagnetsTooltips from "./MagnetsTooltips";
import useDraggingRefs from "../../hooks/useDraggingRefs";
import MagnetsMobile from "./MagnetsMobile";

const StyledMagnets = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function Magnets({ fridgeRef }) {
  const { elems: magnets } = useDraggingRefs(fridgeRef, 5);

  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <StyledMagnets>
      {isMobileDevice ? (
        <MagnetsMobile magnets={magnets} />
      ) : (
        <>
          {magnets.current.map((ref, index) => (
            <Magnet
              key={index}
              ref={ref}
              id={`magnet${index}`}
              data-tooltip-id={`magnet${index}`}
            ></Magnet>
          ))}
          <MagnetsTooltips />
        </>
      )}
    </StyledMagnets>
  );
}

export default Magnets;
