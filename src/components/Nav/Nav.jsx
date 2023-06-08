import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import styles from "./Nav.module.css"

export default function NavBar({onSearch, random}) {
  return (
    <div className={`${styles.Nav}`}>
      <div>
        <NavLink to="/about" className={`${styles.Navlink}`}>ABOUT</NavLink>
        <NavLink to="/home" className={`${styles.Navlink}`}>HOME</NavLink>
        <NavLink to="/favorites" className={`${styles.Navlink}`}>FAVS</NavLink>
      </div>

      <SearchBar onSearch={onSearch} />

      <button className={`${styles.random}`} onClick={random}>
        ADD RANDOM
      </button>
    </div>
  );
}
