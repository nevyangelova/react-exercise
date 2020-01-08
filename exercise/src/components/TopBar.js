import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

const StyledHeader = styled.header`
  height: 48px;
  width: 100%;
  background-color: rgb(102, 63, 180);
  color: white;
  padding: 6px 10px;
  display: flex;
  flexdirection: row;
  alignitems: center;
`;

const StyledLogo = styled.div`
  float: left;
  margin: 8px;
`;

const StyledFloatLeft = styled.div`
  float: left;
  color: white;
  flex: 1;
`;

const StyledFloatRight = styled.div`
  float: right;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const StyledInitialsImage = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  color: black;
  border-radius: 50%;
  text-align: center;
  line-height: 2;
`;

const StyledImage = styled.img`
  max-height: 40px;
  flex: 1;
`;

export const TopBar = props => {
  const { isLoggedIn, onLogin } = props;

  const SignUpButton = styled(Button)`
    background-color: red;
    color: white;
  `;

  const LoginButton = styled(Button)`
    background-color: ${props.isLoggedIn ? 'red' : 'blue'};
    color: white;
  `;

  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          <StyledImage alt={'logo'} src="favicon-196x196.png" />
        </Link>
      </StyledLogo>
      <div>{'Modus Create'}</div>
      <StyledFloatLeft />
      <StyledFloatRight>
        {isLoggedIn && <StyledInitialsImage>NA</StyledInitialsImage>}
        <LoginButton onClick={onLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </LoginButton>
        {!isLoggedIn && <SignUpButton>Signup</SignUpButton>}
      </StyledFloatRight>
    </StyledHeader>
  );
};
