import React from 'react';
import styled from 'styled-components';

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15px 0;
  padding: 7px 20px;
  font-size: 20px;
  background-color: lightgray;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const Button = (props) => {
  return <WrapperButton {...props} />;
};

export default Button;
