import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Landing from './routes/Landing';
import Home from './routes/Home';
import UserList from './routes/UserList';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(rgba(103, 68, 77, 0.9), rgba(103, 68, 77, 0.9)),
        url("https://wallpapercave.com/wp/wp1826777.jpg");
    background-size: cover;
    color: #e9e9e9;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/users" component={UserList} />
      </div>
    </BrowserRouter>
  );
};

export default App;