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

export const TopBar = props => {
  const { isLoggedIn, onLogin } = props;
  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          <img
            alt={'logo'}
            style={{ maxHeight: 40, flex: 1 }}
            src="favicon-196x196.png"
          />
        </Link>
      </StyledLogo>
      <div>{'Modus Create'}</div>
      <StyledFloatLeft />
      <StyledFloatRight>
        {isLoggedIn && <StyledInitialsImage>NA</StyledInitialsImage>}
        <Button
          style={{
            backgroundColor: isLoggedIn ? 'red' : 'blue',
            color: 'white'
          }}
          onClick={onLogin}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
        {!isLoggedIn && (
          <Button style={{ backgroundColor: 'red', color: 'white' }}>
            Signup
          </Button>
        )}
      </StyledFloatRight>
    </StyledHeader>
  );
};
