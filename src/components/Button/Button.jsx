// import styled from "@emotion/styled";
// export const Button = styled.button`
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   margin: 16px;
//   color: white;
//   background-color: #40e6e1;
//   padding: 15px 30px;
//   text-transform: uppercase;
//   font-weight: bold;
//   cursor: pointer;
//   border: none;
//   border-radius: 6px;
// `;

import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledDetailsLink = styled(Link)`
display: flex;
align-items: center;
gap: 4px;
justify-content: center;
  padding: 15px 30px;
  width: 200px;
  margin: 16px;
  color: white;
  background-color: #40e6e1;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 6px;

  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    color: orangered;
  }
`;

export const Button = ({ to, children }) => {
  return (
    <StyledDetailsLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledDetailsLink>
  );
};