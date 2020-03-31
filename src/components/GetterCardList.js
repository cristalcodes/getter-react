import React from 'react';
import styled from 'styled-components';
import GetterCard from '../containers/GetterCard';
import GetterAddButton from '../containers/GetterAddButton';




//STYLING
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: "#ebeef2";
  border-radius: 2px;
  width: 260px;
  height: "100%";
  display:flex;
  flex-direction: column;
  `;

  const Title = styled.h3`
  padding: 8px;
  background-color:#8fabd9;
`;

  const TaskList = styled.div`
    padding: 4px;
    background-color:#ebeef2;
    flex-grow:1;
    min-height: 10px;
  `;
//END STYLING


class GetterCardList extends React.Component {

  render(){
    console.log(1)
    const cardList = this.props
    return(
      <div>
        <Container>
          <Title>{cardList.name}</Title>
          <TaskList>
            { cardList.cards.map((card, index) => (
              <GetterCard key={index} title={card.title} cardId={card.id} />
            ))}
          </TaskList>
          <GetterAddButton deckId={cardList.deckId}/>
        </Container>
      </div>
  )}
}



export default GetterCardList;
