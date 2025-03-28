import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }

  P {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 400px;
    border-radius: 30px;
  }

  &:hover {
    transform: scale(1.1);
    transition: 300ms ease-in-out;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
