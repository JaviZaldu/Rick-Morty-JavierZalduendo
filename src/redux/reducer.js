import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions';

let initialState = { myFavorites: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      const added = [...state.myFavorites, action.payload];
      return {
        ...state,
        myFavorites: added,
      };

    case REMOVE_FAV:
      const remove = state.myFavorites.filter(
        (characters) => characters.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: [...remove],
      };

      case FILTER:
        const filtered = state.allCharacters.filter(
          (character) => character.gender === action.payload
        );
        return {
          ...state,
          myFavorites: filtered,
        };
  
    case ORDER:
      const sorted = [...state.myFavorites];
      if (action.payload === 'A') {
        sorted.sort((a, b) => a.id - b.id);
      } else if (action.payload === 'D') {
        sorted.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: sorted,
      };
  
    default:
      return state;
  }
}
  

export default rootReducer;