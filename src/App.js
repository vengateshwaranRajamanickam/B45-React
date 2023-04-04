import logo from './logo.svg';
import './App.css';
import ListUsers from './ListUsers';
import EditUsers from './EditUsers';
import EditProfile from './EditProfile';
import Profile from './Profile';
import CreateUsers from './CreateUsers';
import NavbarTop from './Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

export default  function App() {
return(
  <div  className="Cover">
<BrowserRouter>
<NavbarTop/>
        <Routes>
        <Route path="/" element={<ListUsers/>} />
        <Route path="/EditUsers/:id" element={<EditUsers/>} />
          <Route path="/EditProfile/:id" element={<EditProfile/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/CreateUsers" element={<CreateUsers />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

