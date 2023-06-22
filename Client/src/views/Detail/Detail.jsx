import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail () {
    const {id} = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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
      <div className={styles.detail1}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles.details}>
          <h3>Species: {character.species}</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Status: {character.status}</h3>
          <h3>Origin: {character.origin?.name}</h3>
          <h3>Location: {character.location?.name}</h3>
        </div>
   
    </div>
   );
   }

export default Detail;

 