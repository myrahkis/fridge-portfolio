/* eslint-disable react/prop-types */
import Magnet from "../../ui/Magnet";
import Modal from "../../ui/Modal";
import MagnetInfo from "./MagnetInfo";

const linkGithub = "https://github.com/myrahkis";
const linkMeme = "https://yandex.ru/video/preview/14730867519621346732";

function MagnetsMobile({ magnets }) {
  return (
    <>
      {magnets.current.map((ref, index) =>
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
      )}
    </>
  );
}

export default MagnetsMobile;
