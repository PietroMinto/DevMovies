import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  border-radius: 50px;

  iframe {
    border: none;
  }

  button {
    position: absolute;
    top: 10px;
    right: 30px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      color: red;
      transition: 0.3s ease-in-out;
    }
  }
`;
