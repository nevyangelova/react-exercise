import React, {Component} from 'react';

const styles = {
  button: {
    width:   100,
    margin:  8,
    padding: 8
  }
};

export const Button = (props) => {
  return (
    <button onClick={props.onClick} style={{...styles.button, ...props.style}}>
      {props.children}
    </button>
  );
}

