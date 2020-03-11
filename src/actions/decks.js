export const getDecks = () => {
  return(dispatch) => {
    dispatch({type: "LOADING_DECKS"})
    return fetch('/decks')
    .then(resp => resp.json())
    .then(decks => dispatch({type: "DECKS_LOADED", payload: decks}))
  }
}
