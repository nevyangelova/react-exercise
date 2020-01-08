import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserDetails from '../components/UserDetails';

const StyledTable = styled.table`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  margin: auto;
  border-radius: 5px;
  width: 80%;
  th {
    color: #fff;
    border: 1px solid #639;
    border-radius: 3px;
  }
  tr {
    background: #fff;
    transition: max-height 1s ease-in-out;
    color: #639;
    font-weight: bold;
  }
`;

export const StyledAction = styled.button`
  box-sizing: border-box;
  border: 2px solid #009688;
  line-height: 2;
  border-radius: 5px;
  font-size: 12px;
  color: #009688;
  background-color: #fff;
  cursor: pointer;
`;

const getUsers = async () => {
  return await fetch('http://localhost:3001/users').then(res => res.json());
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const users = await getUsers();
      setUsers(users);
    }

    fetchData();
  }, []);

  const onCloseModal = () => {
    setSelectedUser(null);
  };

  const openUserModal = user => {
    setSelectedUser(user);
  };

  return (
    <Container>
      <StyledTable>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.email}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <StyledAction onClick={() => openUserModal(user)}>
                    Details
                  </StyledAction>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
      <UserDetails selectedUser={selectedUser} closeModal={onCloseModal} />
    </Container>
  );
};

export default UserList;

const Container = styled.div`
  padding-top: 60px;
  margin: 0 auto;
`;
