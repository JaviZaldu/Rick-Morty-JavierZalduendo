import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail () {
    const {id} = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.json())
         .then(data => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch(error => {
            console.error('Error:', error);
         });
   
      return () => {
         setCharacter({});
      };
   }, [id]);

     return (
      <div className={styles.detail}>
      <div className="img-container">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      <div className={styles.details}>
          <h3>Species:</h3>
          <p>{character.species}</p>
          <h3>Gender:</h3>
          <p>{character.gender}</p>
          <h3>Status:</h3>
          <p>{character.status}</p>
          <h3>Origin:</h3>
          <p>{character.origin?.name}</p>
          <h3>Location:</h3>
          <p>{character.location?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
