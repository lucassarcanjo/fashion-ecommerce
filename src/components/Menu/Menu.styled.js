import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 70vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  border: 1px solid #d4d4d4;

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const MenuLink = styled(Link)`
  font-size: 15px;
  padding: 2rem 0;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    opacity: 0.8;
  }
`;

export const MenuWrapperBlur = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 110vw;
  height: 300%;
  z-index: 2;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
