import logo from './logo.svg';
import './App.css';
import Provider from './Provider'
import Library from './Library'
import Addbook from './Add book'
import Navbar from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <Provider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/addbook/:id" element={<Addbook />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

