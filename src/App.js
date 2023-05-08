import './App.css';
import Loginpage from './Component/Loginpage'
import Forgotpassword from './Component/Forgotpassword';
import Signuppage from './Component/Signuppage'
import Verification from './Component/Verification'
import Home from './Component/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route  path='/' element={<Home/>}/>
  <Route  path='/signup' element={<Signuppage/>}/>
  <Route path="/login" element={<Loginpage/>}/>
  <Route  path='/forgotpassword' element={<Forgotpassword/>}/>
  <Route  path='/verification' element={<Verification/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
