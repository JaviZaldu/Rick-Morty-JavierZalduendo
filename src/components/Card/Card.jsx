import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../../redux/actions";
import style from "./Card.module.css";

function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, addFavorite, removeFavorite, favorites} = props;
  console.log(props);
  const [fav, setFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);
  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  useEffect(() => {
    if (!onClose){
      setCloseBtn(false)
    }
  },[onClose])

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [favorites, character.id]);

  function favoriteHandler(character) {
    if (!fav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character);
      setFav(false);
    }
  }

  return (
    <div className={style.divCard}>
      <div className={style.divbotones}>
        {closeBtn && (<button
          className={style.boton}
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </button>)}
        {fav ? (
          <button className={style.corazon} onClick={() => favoriteHandler(character.id)}>❤️</button>
        ) : (
          <button className={style.corazon} onClick={() => favoriteHandler(character)}>🤍</button>
        )}
      </div>
      <div>
        <img
          className={style.img}
          onClick={navigateHandler}
          src={character.image}
          alt={character.name}
        />
        <h2 className={style.h2}>{character.name}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),

    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);