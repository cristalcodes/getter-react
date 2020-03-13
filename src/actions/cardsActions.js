export const getCards = (id) => {
  return(dispatch) => {
    dispatch({type: "LOADING_CARDS"})
    return fetch(`/decks/${id}`)
    .then(resp => resp.json())
    .then(deck =>
      dispatch({type: "CARDS_LOADED", payload: deck.cards})
    )
  }
}
