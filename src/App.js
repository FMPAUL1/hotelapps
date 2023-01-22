
import Signup from './pages/signup/Signup';
import './styles.scss';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Hote from './pages/hotel/Hote';
import List from './pages/list/List'
function App() {
  return (
  // <Signup/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotels/:id' element={<Hote/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
