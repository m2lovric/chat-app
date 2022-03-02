import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Layout';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/'>Chat App</Link>
        <button>Sign In</button>
      </header>
      <>{children}</>
    </div>
  );
};

export default Layout;
