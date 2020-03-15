export default (state={cards: [], loading: false}, action) => {
  switch(action.type){
    case "ADD_CARD":
      return {
        ...state,
        loading:true
      }

    case "CARD_ADDED":
      return {
        ...state,
        cards: [...state.cards, action.payload],
        loading: false
      }

    default:
      return state
  }
}
