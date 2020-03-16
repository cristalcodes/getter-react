import React from 'react';
import GetterCardList from './GetterCardList';
import '@atlaskit/css-reset';
import { connect } from 'react-redux';
import {getDecks} from '../actions/decksActions';
import styled from 'styled-components';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext';
// import { Draggable, Droppable } from 'react-beautiful-dnd';


// STYLING//
const ClockContainer= styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  display:flex;
  // flexDirection: "row"
`;
// END STYLING//

class GetterApp extends React.PureComponent{

  componentDidMount(){
    this.props.getDecks();
  }

  componentDidUpdate(previousProps, previousState) {
   if (previousProps.cards !== this.props.cards) {
     this.props.getDecks()
     console.log(previousProps)
   }

}

  renderLists = () => {
    const lists = this.props.decks;

    return(
      <Container>
        {lists.map((deck, index) => (
          <GetterCardList key={index} name={deck.name} cards={deck.cards} deckId={deck.id}/>
        ))}
      </Container>
    )
  }

  renderMessage =() => {
    return(
      <ClockContainer>
        <center>
          <h1>
            <Clock format="h:mm:ss" interval={1000} ticking={true} />
          </h1>
          <h3>
            Click the add icon to create a new deck!
          </h3>
        </center>
      </ClockContainer>
    )
  }


  render(){
    //pulls all decks from state.
    return(
      <div className="App">
        {this.props.decks.length > 0 ? this.renderLists() : this.renderMessage()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decksReducer.decks,
    cards: state.cardsReducer.cards,
    loading: state.decksReducer.loading
  }
}

export default connect(mapStateToProps, {getDecks})(GetterApp);
