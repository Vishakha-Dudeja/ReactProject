// Layout.js
import React from 'react';
import Header from '../Header/Header';
import MySideNav from '../MySideNav/MySideNav';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex">
        <MySideNav />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
