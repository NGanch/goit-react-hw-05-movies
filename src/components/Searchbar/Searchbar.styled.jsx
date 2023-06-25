import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: black;
  height: 70px;

`;

export const SearchFormStyled = styled.form`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 20px;
  margin-top: -8px;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  border-style: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  outline: none;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.03em;
  &::placeholder {
    font-weight: 200;
    color: white;
  }
  &::textarea {
    color: white;
  }
`;

export const FormBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  font-size: 20px;
  margin-top: 5px;
  font-weight: bold;
  color: black;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`;
