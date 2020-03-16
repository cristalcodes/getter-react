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

// export const deleteCard = (id) => {
//     fetch(`/cards/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(console.log("Deleted") )
// }
