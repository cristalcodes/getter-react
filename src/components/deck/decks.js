import React from 'react';
import { connect } from 'react-redux';
import {getDecks} from '../../actions/decks'

class Decks extends React.Component{

  componentDidMount(){
    this.props.getDecks()
  }

  render(){

    const decks = this.props.decks.map((deck, i) =>
      <li key={i}>{deck.name}</li>
    )

    return(
      <div>
      <h1>Your Decks </h1>
      <ul>{this.props.loading ? <h3>...loading</h3> : decks} </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decksReducer.decks,
    loading: state.decksReducer.loading
  }
}

export default connect(mapStateToProps, {getDecks})(Decks);
