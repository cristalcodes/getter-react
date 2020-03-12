import React from 'react';
import DeckCard from './deckCard';
import { connect } from 'react-redux';
import {getDecks} from '../../actions/decksActions';
import styled from 'styled-components';
// import { Draggable, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: light;
  border-radius: 2px;
  width: 220px;

  display:flex;
  flex-direction: column;
  `;

const Title = styled.h3`
  padding: 8px;
`;

const DeckList = styled.div`
  padding: 8px;
  background-color:${props => (props.isDraggingOver? 'lightblue': 'inherit')};
  flex-grow:1;
  min-height: 100px;
`;


class Deck extends React.Component{

  componentDidMount(){
    this.props.getDecks();
  }

  render(){

    const decks = this.props.decks.map((deck, i) =>
    <div>
      <Title key={i} deck_id={deck.id}>{deck.name}</Title>
      <DeckList>
        Cards go here
        <DeckCard />
      </DeckList>
      </div>
    )

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
