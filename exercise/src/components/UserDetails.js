import React from 'react';
import Modal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components';

const StyledModal = styled(Modal)`
  text-align: center;
  color: #fff;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  background-color: #3a2854;
  padding: 1em;
  border-radius: 5px;
  outline: none;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    *:last-child {
      margin-left: 1em;
    }
  }
  button {
    display: block;
    border-radius: 5px;
    background-color: #009688;
    color: #fff;
    cursor: pointer;
    border: none;
    font-size: 15px;
    width: 60px;
    height: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
`;

const ModalOverlayStyle = createGlobalStyle`
  .ReactModal__Overlay {
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;

const UserDetails = props => {
  return (
    <div>
      <ModalOverlayStyle />
      <StyledModal
        appElement={document.getElementById('root')}
        isOpen={!!props.selectedUser}
        onRequestClose={props.closeModal}
      >
        {props.selectedUser && (
          <div>
            <header>
              <h1>User details</h1>
              <button onClick={props.closeModal}>Back</button>
            </header>
            <div>
              <h3>
                <span>First name: </span>
                <span>{props.selectedUser.name.first}</span>
              </h3>
              <h3>
                <span>Last Name: </span>
                <span>{props.selectedUser.name.last}</span>
              </h3>
              <h3>
                <span>Avatar: </span>
                <img alt="" src={props.selectedUser.picture.thumbnail}></img>
              </h3>
              <h3>
                <span>E-mail: </span>
                <span>{props.selectedUser.email}</span>
              </h3>
            </div>
            <div>
              <h3>
                <span>Phone: </span>
                <span>{props.selectedUser.phone}</span>
              </h3>
            </div>
          </div>
        )}
      </StyledModal>
    </div>
  );
};

export default UserDetails;
