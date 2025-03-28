import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  img {
    width: 30%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  padding: 10px 50px;
`;

export const Li = styled.li`
  cursor: pointer;
  font-weight: 600;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 26px;
  }
`;
