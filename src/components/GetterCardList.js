import React from 'react';
import { connect } from 'react-redux';
import {getCards} from '../actions/cardsActions';
import GetterCard from './GetterCard';
import styled from 'styled-components';
// import CardContent from '@material-ui/core/CardContent';

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

const TaskList = styled.div`
  padding: 8px;
  background-color:${props => (props.isDraggingOver? 'lightblue': 'inherit')};
  flex-grow:1;
  min-height: 100px;
`;


// class GetterCardList extends React.Component{
//
//   componentDidMount(){
//     this.props.getCards(this.props.deckId)
//   }
//
//
//
//   render(){
//
//     return(
//       <Container>
//         hi
//       </Container>
//
//
//     )
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     cards: state.cardsReducer.cards,
//     loading: state.cardsReducer.loading
//   }
// }






//
// export default connect(mapStateToProps, {getCards})(GetterCardList);

const GetterList = ({name, cards}) => {
  return(
    <div style={styles.container}>
      <h4>{name}</h4>
      { cards.map(card => (<GetterCard title={card.title} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor:'#ccc',
    borderRadius:3,
    width:300,
    padding: 8,
    marginRight: 8
  }
}

export default GetterList;
