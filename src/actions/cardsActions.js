export const addCard = (card) => {

  return(dispatch) => {
    console.log(7)

    dispatch({type: "ADD_CARD"}, card)
    console.log(8)

    return fetch(`/cards`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(card => {
      console.log(10)
      return dispatch({type: "CARD_ADDED", payload: card})
    })
    console.log(11)
  }
  console.log(12)
}

export const deleteCard = (id) => {
  return (dispatch) => {
    dispatch({type:"DELETE_CARD"})

    return fetch(`/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(dispatch({type: "CARD_DELETED", payload:id}))

  }
}
