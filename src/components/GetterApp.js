import React from 'react';
import GetterCardList from './GetterCardList';
import { connect } from 'react-redux';
import {getDecks} from '../actions/decksActions';
import styled from 'styled-components';
// import { Draggable, Droppable } from 'react-beautiful-dnd';



const Container = styled.div`
  display:flex;
`;

const Title = styled.h3`
  padding: 8px;
`;

class GetterApp extends React.Component{


  componentDidMount(){
    this.props.getDecks();

  }

  render(){

    //pulls all decks from state.
    const lists = this.props.decks;


    return(
      <div className="App">
        <div style={styles.listsContainer}>
        {lists.map(deck => (
          <GetterCardList name={deck.name} cards={deck.cards}/>
        ))}
        </div>
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

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};





export default connect(mapStateToProps, {getDecks})(GetterApp);

// const decks = this.props.decks.map((deck, i) =>
//   <div key={i}>
//     <Title>
//       {deck.name}
//     </Title>
//       {deck.cards.map((card, index)=>
//         // <li key={index}>{card.title}</li>
//         <GetterCardList key={index} card={card}/>
//       )}
//     </div>
// );
