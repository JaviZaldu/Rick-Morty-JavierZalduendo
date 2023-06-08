import { connect } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import { orderCards, filterCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Favorites(props) {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === 'All') {
      setAux(true);
    } else {
      setAux(false);
      dispatch(filterCards(value));
    }
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="All">Mostrar todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <Cards characters={aux ? props.allCharacters : props.favorites} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps, null)(Favorites);