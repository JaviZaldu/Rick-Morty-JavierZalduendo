import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink, useLocation } from 'react-router-dom';
import styles from "./Nav.module.css"

export default function NavBar({onSearch, random}) {
  const location = useLocation();
  const isHome = location.pathname === '/home';
  return (
    <div className={`${styles.Nav}`}>
      <div>
        <NavLink to="/about" className={`${styles.Navlink}`}>ABOUT</NavLink>
        <NavLink to="/home" className={`${styles.Navlink}`}>HOME</NavLink>
        <NavLink to="/favorites" className={`${styles.Navlink}`}>FAVS</NavLink>
      </div>
      {isHome && (
        <div>
          <SearchBar onSearch={onSearch} />
          </div>
          )}
      {isHome && (
          <div>
          <button className={`${styles.random}`} onClick={random}>
            ADD RANDOM
          </button>
        </div>
      )}
    </div>
  );
}
