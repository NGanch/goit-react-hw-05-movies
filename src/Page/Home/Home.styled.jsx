import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import styled from "styled-components";
export const HomeMain = styled.main`
  background-color: black;
  max-width: 1400px;
  padding: 50px 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const HomeTitle = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 800;
`;
export const HomeList = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const HomeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 287px;
  background-color: black;
  border-radius: 0px;
  box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
    0px 4px 4px rgba(46, 47, 66, 0.16), 0px 4px 10px rgba(46, 47, 66, 0.08),
    0px 4px 10px rgba(46, 47, 66, 0.08);
  &:hover,
  &:focus {
    border-radius: 6px;
    box-shadow: 0px 5px 3px #40e6e1, 0px 3px 3px #40e6e1, 0px 3px 9px #40e6e1;
  }
`;
export const StyledLink = styled(NavLink)`

`;

export const IMG = styled.img`
  height: 380px;
  width: 287px;
  border-radius: 10px;
  box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
    0px 4px 4px rgba(46, 47, 66, 0.16), 0px 4px 10px rgba(46, 47, 66, 0.08),
    0px 4px 10px rgba(46, 47, 66, 0.08);
`;

export const MovieP = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 5px;
  &.active {
    color: orange;
  }
  &:hover {
    color: antiquewhite;
    font-size: 20px;
    font-weight: 500;
  }
`;