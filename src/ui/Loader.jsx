import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .loader {
    border: 0 solid transparent;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: relative;
  }

  .loader::before,
  .loader::after {
    content: '';
    border: 7px solid #38bdf8; /* 🌤️ Sky Blue */
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    animation: loader 2s linear infinite;
    opacity: 0;
  }

  .loader::before {
    animation-delay: 1s;
  }

  @keyframes loader {
    0% {
      transform: scale(1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

export default Loader;
