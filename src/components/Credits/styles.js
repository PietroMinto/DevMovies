import styled from "styled-components";

export const Title = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color: #ffffff;
  }
  img {
    height: 200px;
    border-radius: 10px;

    &:hover {
      transform: translateY(-15px);
      transition: 0.4s;
      box-shadow: rgb(100 100 111 / 80%) 0px 7px 29px 0px;
    }
  }
`;
