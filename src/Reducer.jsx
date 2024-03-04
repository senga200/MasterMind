const initialState = {
  selectedColors: [],
  secretCode: [],
  // gameOver: false,
  // winner: false,
};

const reducer = (state = initialState, action) => {
  console.log(JSON.stringify(state, null, 2));
  switch (action.type) {
    case "SET_SELECTED_COLOR":
      return {
        ...state,
        selectedColor: action.payload,
      };
    //ajouter la couleur selectionnée au tableau selectedColors
    case "SET_SELECTED_COLORS":
      return {
        ...state,
        selectedColors: action.payload,
      };

    case "SET_SECRET_CODE":
      return {
        ...state,
        secretCode: action.payload,
      };
    // case "SET_GAME_OVER":
    //   return {
    //     ...state,
    //     gameOver: action.payload,
    //   };
    // case "SET_WINNER":
    //   return {
    //     ...state,
    //     winner: action.payload,
    //   };
    default:
      return state;
  }
};

export default reducer;
