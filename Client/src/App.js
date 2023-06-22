import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './views/About/About';
import Detail from './views/Detail/Detail';

import LoginForm from './components/LoginForm/LoginForm';
import Favorites from "./views/Favorites/Favorites.jsx";
import { Navigate } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
   const [characterIds, setCharacterIds] = useState([]);
   const [access, setAccess] = useState(false); 

   const location = useLocation();
   const navigate = useNavigate();

  async function loginHandler(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const {access} = data;
       setAccess(data);
       access && navigate('/home');
    } 
    catch (error) {
      console.log(error.message)
    }
 }
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  
  async function onSearch(id) {
    try {
       const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
       if (data.name && !characterIds.includes(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          setCharacterIds((oldCharsIds) => [...oldCharsIds, data.id]);
       }
       else {
       window.alert('¡No hay personajes con este ID o ya ha sido agregado!');
       }
    } 
    catch (error) {
      console.log(error.message);
    }
 }  


   function closeHandler(id) {
      const newCharacters = characters.filter((character) => character.id !== id);
      const newCharactersIds = characterIds.filter(
        (characterId) => characterId !== id
      );
      setCharacters(newCharacters);
      setCharacterIds(newCharactersIds);
    };



    function randomHandler() {
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();
      random = Number(random);

      if (!haveIt.includes(random)) {
        haveIt.push(random);
        fetch(`http://localhost:3001/rickandmorty/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          });
      } else {
        console.log("Ya agregaste todos los personajes");
        return false;
      }
    }
  
    return (
      <div className="App">
        {location.pathname !== "/" && <Nav onSearch={onSearch} random={randomHandler} />}
         <Routes>
          <Route path='/' element={<LoginForm login={loginHandler}/>}/>
          <Route path='/home' element= {<Cards characters={characters} onClose={closeHandler}/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/detail/:id' element= {<Detail/>}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path='*' element={<Navigate to= "/ErrorPage" replace/>}/>
         </Routes>
      </div>
   );
}

export default App;