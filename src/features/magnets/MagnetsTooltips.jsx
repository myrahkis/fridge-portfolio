import { Tooltip } from "react-tooltip";
import Modal from "../../ui/Modal";
import MagnetInfo from "./MagnetInfo";

const linkGithub = "https://github.com/myrahkis";
const linkMeme = "https://yandex.ru/video/preview/14730867519621346732";

function MagnetsTooltips() {
  return (
    <>
      <Modal>
        <Tooltip
          id="magnet1"
          content={
            <Modal.Open opens="credits">
              <p>Credits</p>
            </Modal.Open>
          }
          clickable
        />
        <Modal.Window name="credits" width="34">
          <MagnetInfo magnet="magnet1" />
        </Modal.Window>
      </Modal>

      <Modal>
        <Tooltip
          id="magnet2"
          content={
            <Modal.Open opens="contacts">
              <p>Контакты</p>
            </Modal.Open>
          }
          clickable
        />
        <Modal.Window name="contacts" width="34">
          <MagnetInfo magnet="magnet2" />
        </Modal.Window>
      </Modal>

      <Modal>
        <Tooltip
          id="magnet3"
          content={
            <Modal.Open opens={`about-me`}>
              <p>Обо мне</p>
            </Modal.Open>
          }
          clickable
        />
        <Modal.Window name={`about-me`} width="34">
          <MagnetInfo magnet={`magnet3`} />
        </Modal.Window>
      </Modal>

      <Tooltip
        id="magnet0"
        content={
          <a href={linkGithub} target="_blank">
            Мой github
          </a>
        }
        clickable
      />
      <Tooltip
        id="magnet4"
        content={
          <a href={linkMeme} target="_blank">
            ;)
          </a>
        }
        clickable
      />
    </>
  );
}

export default MagnetsTooltips;
