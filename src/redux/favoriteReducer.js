const initialState = {
 favorites:[]
  };
  
  const ADD = "ADD";
  const DELETE="DELETE"
  
  
  export const favoriteReducer = (state = initialState, action) => {
    console.log("payload: ", action.payload);
    switch (action.type) {
      case ADD:
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
        case DELETE:  
         const index= state.favorites.findIndex((item)=>item==action.payload)
         const newFavorites=[...state.favorites.slice(0,index),...state.favorites.slice(index+1)]
          return {
            ...state,
            favorites: newFavorites
          };
      default:
        return state;
    }
  };
  
  export const addFavoriteAction=((payload)=>({type:ADD, payload}))
  export const deleteFavoriteAction=((payload)=>({type:DELETE, payload}))
