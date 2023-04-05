import logo from './logo.svg';
import './App.css';

import Student from './Student';
import Provider from './Student/Provider';
import Nav from './Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default  function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Student />} />
          {/* <Route path="/Teacher" element={<Teacher/>} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}
