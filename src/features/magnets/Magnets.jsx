/* eslint-disable react/prop-types */
import styled from "styled-components";
import Magnet from "../../ui/Magnet";
import MagnetsTooltips from "./MagnetsTooltips";
import useDraggingRefs from "../../hooks/useDraggingRefs";
import Modal from "../../ui/Modal";
import MagnetInfo from "./MagnetInfo";

const StyledMagnets = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const linkGithub = "https://github.com/myrahkis";
const linkMeme = "https://yandex.ru/video/preview/14730867519621346732";

function Magnets({ fridgeRef }) {
  const { elems: magnets } = useDraggingRefs(fridgeRef, 5);

  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <StyledMagnets>
      {isMobileDevice
        ? magnets.current.map((ref, index) =>
            index !== 0 && index !== 4 ? (
              <Modal key={index}>
                <Modal.Open opens={`magnet${index}`}>
                  <Magnet
                    key={index}
                    ref={ref}
                    id={`magnet${index}`}
                    data-tooltip-id={`magnet${index}`}
                  ></Magnet>
                </Modal.Open>
                <Modal.Window name={`magnet${index}`} width="34">
                  <MagnetInfo magnetId={`magnet${index}`} />
                </Modal.Window>
              </Modal>
            ) : (
              <a
                key={index}
                href={index === 0 ? linkGithub : linkMeme}
                target="_blank"
              >
                <Magnet
                  key={index}
                  ref={ref}
                  id={`magnet${index}`}
                  data-tooltip-id={`magnet${index}`}
                ></Magnet>
              </a>
            )
          )
        : magnets.current.map((ref, index) => (
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
