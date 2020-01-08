import React from 'react';
import { Button } from './Button';

export const HomeContent = props => {
  return (
    <div>
      <Button onClick={props.onLogin}>
        {props.isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    </div>
  );
};
