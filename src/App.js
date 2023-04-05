import logo from './logo.svg';
import './App.css';
import Student from "./Student"
import Teacher from './Teacher'
import Nav from './Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

export default  function App() {
  return (
  <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Student/>} />
          <Route path="/teacher" element={<Teacher/>} />
          </Routes>
      </BrowserRouter>
    )
}
