import logo from './logo.svg';
import './App.css';
import Student from "./Student"
import Teacher from "./Teacher"
import Nav from './Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default  function App() {
  return (
    <div className="Cover">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/Teacher" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
