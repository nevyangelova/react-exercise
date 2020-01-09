import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import users from './usersMock';
import UserList from '../UserList';

describe('UserList container', () => {
  jest.useFakeTimers();

  it('renders users table', done => {
    fetch.mockResponseOnce(JSON.stringify(users));

    const wrapper = mount(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    );

    setImmediate(() => {
      wrapper.update();
      expect(wrapper.find('tr').length).toBe(users.results.length);
      expect(
        wrapper
          .find('td')
          .first()
          .text()
      ).toEqual('Nevy');
      done();
    });
  });
});
