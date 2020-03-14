import React from 'react';
import GetterCardList from './GetterCardList';
import '@atlaskit/css-reset';
import { connect } from 'react-redux';
import {getDecks} from '../actions/decksActions';
import styled from 'styled-components';
// import { Draggable, Droppable } from 'react-beautiful-dnd';


// STYLING//

const Container = styled.div`
  display:flex;
`;
// END STYLING//

class GetterApp extends React.Component{

  componentDidMount(){
    this.props.getDecks();
  }

  render(){
    //pulls all decks from state.
    const lists = this.props.decks;

    return(
      <div className="App">
        <Container>
          {lists.map(deck => (
            <GetterCardList name={deck.name} cards={deck.cards}/>
          ))}
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

export default connect(mapStateToProps, {getDecks})(GetterApp);
