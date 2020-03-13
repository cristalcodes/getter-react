import React from 'react';
import Cards from './cards';
import { connect } from 'react-redux';
import {getDecks} from '../../actions/decksActions';
import styled from 'styled-components';
// import { Draggable, Droppable } from 'react-beautiful-dnd';



const Container = styled.div`
  display:flex;
`;

const Title = styled.h3`
  padding: 8px;
`;

class Deck extends React.Component{


  componentDidMount(){
    this.props.getDecks();

  }

  render(){
    //pulls all decks from state.
    const decks = this.props.decks.map((deck, i) =>
      <div key={i}>
        <Title>
          {deck.name}
        </Title>
        <Cards key={i} deckId={deck.id}/>
      </div>
    );

    return(
      <div>
        <Container>
          {decks}
        </Container>
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




export default connect(mapStateToProps, {getDecks})(Deck);
