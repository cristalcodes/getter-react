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
      return dispatch({type: "CARD_ADDED", payload: card})
    })
  }
}

export const deleteCard = (id) => {
  console.log("You are in the delete action function. The id of this card is", id)

  return (dispatch) => {

    dispatch({type:"DELETE_CARD", payload: id})

    const fetchURL= `/cards/${id}`
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };


    return fetch(fetchURL, configObj)
    .then(() => {
      dispatch({type: "CARD_DELETED"})
    })
    .catch((error) => {
      alert(`${error} on delete card` )
    });

  }

}
