import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFF;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 70vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  /* div {

    width: 100%;
    background-color: #111;
    border-bottom: solid 1px #333;
  }
   */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
    font-size: 15px;
    padding: 2rem 0;
    font-weight: bold;
    /* letter-spacing: 2px; */
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;
    /* border-bottom: solid 1px #222; */
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
`;

export const MenuWrapperBlur = styled.div`
  /* background: hsla(0, 0% 100%, 0.5); */
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: -100%;
  left: 0;
  width: 110vw;
  height: 300%;
  z-index: -5;
  /* filter: blur(2px); */
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
`;