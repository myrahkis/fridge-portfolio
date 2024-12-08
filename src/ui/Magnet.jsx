import styled from "styled-components";
import { device } from "../styles/adaptability";

const Magnet = styled.span`
  cursor: pointer;
  position: absolute;

  &#magnet0 {
    top: 28rem;
    right: 6rem;

    width: 12rem;
    height: 8rem;
    background-image: url("магниты/magnet-git.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    transform: rotate(8deg);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.4) rotate(8deg);
    }
    &:active {
      transform: rotate(8deg);
    }

    @media ${device.xs} {
      top: 35rem;
    }
  }
  &#magnet1 {
    right: 12rem;
    bottom: 10rem;

    width: 7rem;
    height: 7rem;
    background-image: url("магниты/magnet-credits.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.4);
    }
    &:active {
      transform: none;
    }
  }
  &#magnet2 {
    top: 4rem;
    right: 6.5rem;

    width: 10rem;
    height: 10rem;
    background-image: url("магниты/magnet-contacts.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.4);
    }

    @media ${device.xs} {
      top: 16rem;
      right: 5rem;
      width: 9rem;
      height: 9rem;
    }
  }
  &#magnet3 {
    left: 13rem;
    top: 21rem;

    width: 11rem;
    height: 11rem;
    background-image: url("магниты/magnet-about-me.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.2s;
    transform: rotate(-10deg);

    &:hover {
      transform: scale(1.4) rotate(-10deg);
    }
    &:active {
      transform: rotate(-10deg);
    }

    @media ${device.xs} {
      top: 29rem;
      left: 11rem;
      width: 9rem;
      height: 9rem;
    }
  }
  &#magnet4 {
    left: 18rem;
    bottom: 20rem;

    width: 8rem;
    height: 8rem;
    background-image: url("магниты/magnet-meme.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default Magnet;
