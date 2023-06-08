import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState("");
  const handleChange = (event) => {setId(event.target.value)};
  return (
    <div className={styles.container}>
      <input className={`${styles.imput}`} type="search" onChange={handleChange} value={id}/>
      <button className={`${styles.button}`} onClick= {()=> {onSearch(id)}}>
        AGREGAR
      </button>
    </div>
  );
}