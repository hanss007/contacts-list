import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid darkgray;
  justify-content: flex-start;
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: darkgray;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: white;
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: 'active' })`
  font-weight: bold;
  text-decoration: none;
  color: darkgray;
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  &.active {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: #646464;
  }
`;
