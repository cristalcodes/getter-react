import React from 'react';
import { connect } from 'react-redux';
import {getCards} from '../actions/cardsActions';
import GetterCard from './GetterCard';
import styled from 'styled-components';
// import CardContent from '@material-ui/core/CardContent';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 230px;
  display:flex;
  flex-direction: column;
  `;

  const Title = styled.h3`
  padding: 8px;
  background-color:lightgrey;
`;

  const TaskList = styled.div`
    padding: 8px;
    background-color:white;
    flex-grow:1;
    min-height: 100px;
  `;



const GetterList = ({name, cards}) => {
  return(
    <Container>
      <Title>{name}</Title>
      <TaskList>
      { cards.map(card => (<GetterCard title={card.title} />
      ))}
      </TaskList>
    </Container>
  )
}



export default GetterList;
