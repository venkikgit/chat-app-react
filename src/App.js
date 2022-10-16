import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    {/* <Home/> */}
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
