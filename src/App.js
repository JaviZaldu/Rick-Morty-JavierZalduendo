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
   const [access, setAccess] = useState(false); 

   const location = useLocation();
   const navigate = useNavigate();
    
  const EMAIL = "javier@gmail.com";
  const PASSWORD = "123456";

  function loginHandler(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   function closeHandler(id) {
      let deleted = characters.filter((character) => character.id !== Number(id));
  
      setCharacters(deleted);
    }

    function randomHandler() {
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();
      random = Number(random);

      if (!haveIt.includes(random)) {
        haveIt.push(random);
        fetch(`https://rickandmortyapi.com/api/character/${random}`)
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
          <Route path='/detail/:Id' element= {<Detail/>}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path='*' element={<Navigate to= "/ErrorPage" replace/>}/>
         </Routes>
      </div>
   );
}

export default App;