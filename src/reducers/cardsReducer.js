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

    case "DELETE_CARD":
    debugger
      return {
        ...state,
        cards: [...state.cards.filter(card => card.id !== action.payload)],
        loading:true
      }

    case "CARD_DELETED":
      return {...state, loading: true }



    default:
      return state
  }
}
