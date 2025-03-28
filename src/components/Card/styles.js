import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 30px;
    width: 300px;
    height: 100%;

    &:hover {
      scale: 1.05;
      transition: 0.3s ease-in-out;
    }
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
  }
`;
