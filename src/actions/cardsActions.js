export const addCard = (card) => {
  return(dispatch) => {
    dispatch({type: "ADD_CARD"}, card)
    return fetch(`/cards`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(card => {
      console.log("Fetch Request Made")
      console.log("Card", card)
      return dispatch({type: "CARD_ADDED", payload: card})
    })
  }
}
