import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  margin: 8px;
  padding: 8px;
`;

export const Button = props => {
  return (
    <StyledButton onClick={props.onClick} className={props.className}>
      {props.children}
    </StyledButton>
  );
};
