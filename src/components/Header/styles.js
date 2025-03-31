import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${(props) =>
    props.changeBackground ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  transition: background-color 0.7s ease-in-out;

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
  position: relative;
  font-size: 26px;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.isActive ? "100%" : "0%")};
    border-radius: 50px;
    background: rgb(103, 25, 122);
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
