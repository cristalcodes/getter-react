export default (state={decks: [], loading: false}, action) => {
  switch(action.type){
    case "LOADING_DECKS":
      return {
        ...state,
        loading:true
      }

    case "DECKS_LOADED":
      return {
        decks: action.payload,
        loading: false
      }


    default:
      return state
  }
}
