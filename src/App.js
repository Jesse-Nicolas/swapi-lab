import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import StarshipList from './Pages/StarshipList/StarshipList';
import StarshipDetails from './Pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <NavBar />
      {/* <StarshipList /> */}
      {/* <Routes>
        <Route path='/' element={<StarshipList />}/>
        <Route path='/starship' element={<StarshipDetails />}/>
      </Routes> */}

      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
