export const getCards = (id) => {
  return(dispatch) => {
    dispatch({type: "LOADING_CARDS"})
    return fetch(`/decks/${id}/cards`)
    .then(resp => resp.json())
    .then(cards =>
      dispatch({type: "CARDS_LOADED", payload: cards})
    )
  }
}
