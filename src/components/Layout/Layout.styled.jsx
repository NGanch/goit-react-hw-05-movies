import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
export const Header = styled.header``;
export const HeaderList = styled.header`
  background-color: #40e6e1;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 70px;
  box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
    0px 4px 4px rgba(46, 47, 66, 0.16), 0px 4px 10px rgba(46, 47, 66, 0.08),
    0px 4px 10px rgba(46, 47, 66, 0.08);
  list-style: none;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
