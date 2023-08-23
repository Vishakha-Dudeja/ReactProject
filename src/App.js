import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import MySideNav from './Components/MySideNav/MySideNav';
import DataTable from './Components/DataTable/DataTable';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
    <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/home" element={<Home />} />
          <Route path="/datatable" element={<DataTable />} />
        </Route>
      </Routes>
      </Router>
  );
}

function WithoutNav() {
  return (
    <>
      <Outlet/>
    </>
  );
}

function WithNav() {
  return (
    <>
      <Header />
      <MySideNav/>
      <Outlet />
    </>
  );
}

export default App;