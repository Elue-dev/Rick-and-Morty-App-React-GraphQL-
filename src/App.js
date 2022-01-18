import './App.css';
import CharacterList from './pages/CharacterList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Character from './pages/Character';
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'><h1>Rick and Morty GraphQL App</h1></Link>
        <Link to='/search' className='search_link'>
          Search Character Locations...
        </Link>
        <Routes>
          <Route exact path='/' element={<CharacterList />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/:id' element={<Character />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
