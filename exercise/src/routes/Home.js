import React, { useState } from 'react';

import { TopBar } from '../components/TopBar';
import { HomeContent } from '../components/HomeContent';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('render', isLoggedIn)

  // mock Promise as we wait for the backend ;)  
  const logIn = () => new Promise((resolve) => resolve({loggedIn: true}))
  
  const handleLogin = async () => {
    const result = await logIn();
    setIsLoggedIn(result.loggedIn);
    console.log('inHandler', isLoggedIn)
  }

  return (
    <div className="App">
      <TopBar isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
      <HomeContent isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
    </div>
  );
}

export default Home;


