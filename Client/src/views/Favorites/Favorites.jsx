// import {connect} from "react-redux";
import Cards from "../../components/Cards/Cards";
import { useSelector, useDispatch} from "react-redux";
import { orderFavorites, filterFavorites, resetFavorites} from "../../redux/actions";
import styles from "./Favorites.module.css"

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function handleSort(e) {
    dispatch(orderFavorites(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterFavorites(e.target.value));
  }

  function handleReset() {
    dispatch(resetFavorites());
  }

  return (
    <div>
      <select className={styles.filter} placeholder="Gender" onChange={handleFilter}>
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option className={styles.option} value={gender}>{gender}</option>
        ))}
      </select>
      <select className={styles.filter} placeholder="Orden" onChange={handleSort}>
        {["Ascendente", "Descendente"].map((order) => (
          <option className={styles.option} value={order}>{order}</option>
        ))}
      </select>
      <button className={styles.reset} onClick={handleReset}>Reset</button>
      <Cards characters={favorites} />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     favorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);