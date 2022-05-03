import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import { useSelector } from 'react-redux'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Search from './components/pages/Search';
function App() {
  const { MovieDetails } = useSelector(state => state.infoMovies)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
