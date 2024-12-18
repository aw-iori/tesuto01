import './App.css'
import {BrowserRouter,Routes,Route, Link} from 'react-router'
import Home from './routers/Home'
import About from './routers/About'
import Weather from './routers/Weather'

function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/Weather' element={<Weather />} />
          </Routes>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to ='/Weather'>WEATHER</Link></li>
          </ul>
          
          
          
      </BrowserRouter>
    );
  }
  
export default App
