import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import StarshipList from './Pages/StarshipList/StarshipList';
import StarshipDetails from './Pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <NavBar />
      <StarshipList />
      <Routes>
        <Route path='/starship' element={<StarshipDetails />}/>
      </Routes>
    </>
  );
}

export default App;
