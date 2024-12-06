import { Tooltip } from "react-tooltip";
import Modal from "../../ui/Modal";
import MagnetInfo from "./MagnetInfo";
import styled from "styled-components";

const linkGithub = "https://github.com/myrahkis";
const linkMeme = "https://yandex.ru/video/preview/14730867519621346732";

const Container = styled.div`
  .custom-tooltip {
    backdrop-filter: blur(8px);
    border-radius: 50%;
    padding: 2rem 2.5rem;
    background-color: #258074;
  }
`;

const Name = styled.p`
  cursor: pointer;
  color: white;
`;

const Link = styled.a`
  text-decoration: none;

  &:link,
  &:visited {
    color: white;
  }

  &:active {
    color: #6aaea3;
  }
`;

function MagnetsTooltips() {
  return (
    <Container>
      {/* modals */}
      <Modal>
        <Tooltip
          className="custom-tooltip"
          id="magnet1"
          content={
            <Modal.Open opens="credits">
              <Name>Credits</Name>
            </Modal.Open>
          }
          arrowColor="#00584d"
          border="3px solid #00584d"
          clickable
        />
        <Modal.Window name="credits" width="34">
          <MagnetInfo magnet="magnet1" />
        </Modal.Window>
      </Modal>

      <Modal>
        <Tooltip
          className="custom-tooltip"
          id="magnet2"
          content={
            <Modal.Open opens="contacts">
              <Name>Контакты</Name>
            </Modal.Open>
          }
          arrowColor="#00584d"
          border="3px solid #00584d"
          clickable
        />
        <Modal.Window name="contacts" width="34">
          <MagnetInfo magnet="magnet2" />
        </Modal.Window>
      </Modal>

      <Modal>
        <Tooltip
          className="custom-tooltip"
          id="magnet3"
          content={
            <Modal.Open opens="about-me">
              <Name>Обо мне</Name>
            </Modal.Open>
          }
          globalCloseEvents={["mousedown"]}
          arrowColor="#00584d"
          border="3px solid #00584d"
          ts="click"
          clickable
        />
        <Modal.Window name="about-me" width="34">
          <MagnetInfo magnet="magnet3" />
        </Modal.Window>
      </Modal>

      {/* links */}
      <Tooltip
        className="custom-tooltip"
        id="magnet0"
        content={
          <Link href={linkGithub} target="_blank">
            Мой github
          </Link>
        }
        arrowColor="#00584d"
        border="3px solid #00584d"
        clickable
      />
      <Tooltip
        className="custom-tooltip"
        id="magnet4"
        content={
          <Link href={linkMeme} target="_blank">
            ;)
          </Link>
        }
        arrowColor="#00584d"
        border="3px solid #00584d"
        clickable
      />
    </Container>
  );
}

export default MagnetsTooltips;
