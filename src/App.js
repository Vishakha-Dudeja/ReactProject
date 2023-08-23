import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import MySideNav from './Components/MySideNav/MySideNav';
import DataTable from './Components/DataTable/DataTable';

function App() {
  return (
    <Router>
      <Header/>
      <MySideNav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/datatable' element={<DataTable />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
