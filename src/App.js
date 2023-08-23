import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import MySideNav from './Components/MySideNav/MySideNav';
import DataTable from './Components/DataTable/DataTable';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import RequestAuth from './Components/RequestAuth/RequestAuth';

function App() {
  const isAuthenticated = false;
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/home" element={<Home />} />
          <Route element={<RequestAuth isAuthenticated={isAuthenticated} />}>
            <Route path='/admin' element={<Admin />} />
          </Route>
          <Route path="/datatable" element={<DataTable />} />
        </Route>
      </Routes>
    </Router>
//     Reference - 
// https://stackoverflow.com/questions/47281850/how-to-hide-navbar-in-login-page-in-react-router
  );
}

function WithoutNav() {
  return (
    <>
      <Outlet />
    </>
  );
}

function WithNav() {
  return (
    <>
      <Header />
      <MySideNav />
      <Outlet />
    </>
  );
}

export default App;