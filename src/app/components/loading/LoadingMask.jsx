import React from 'react';
// import styles from './LoadingMask.module.scss';
import styled from 'styled-components';

const MaskContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.p`
  background-color: rgba(255, 255, 255, .5);
  box-shadow: green 0px 0px 10px 1px;
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center; 
  animation: rotateClockwise 2s infinite;

  @keyframes rotateClockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingMask = () => (
  <MaskContainer>
    <Logo>...</Logo>
  </MaskContainer>
);

export default LoadingMask;