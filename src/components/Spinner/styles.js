/* adapted from https://loading.io/css/ */
import styled, { keyframes } from 'styled-components';

const animated = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 5em;
  height: 5em;

  div {
    position: absolute;
    width: 6px;
    height: 6px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: ${animated} 1.2s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
  }
  div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
  }
  div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
  }

  div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
  }
  div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
  }
  div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
  }
  div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
  }
  div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
  }
  div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
  }
  div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
  }
  div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
  }
  div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
  }
`;
