import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DeleteCardButton from '../components/DeleteCardButton';


class GetterCard extends React.Component{

  state = {
    showingButtons: false
  }

  showButtons = event => {
    this.setState({
      showingButtons: true
    })
  }

  hideButtons = event => {
    this.setState({
      showingButtons: false
    })
  }

  render(){
    return(
      <div>
      <Container>
        <Card variant="outlined" onMouseEnter={this.showButtons} onMouseLeave={this.hideButtons}>
          <InnerContainer>
          <Typography style={{margin:5}}>
          {this.props.title}
          </Typography>
          {this.state.showingButtons? <DeleteCardButton cardId={this.props.cardId}/> : " "}
          </InnerContainer>
        </Card>
      </Container>
      </div>
  )}
}


const Container = styled.div`
  padding-bottom: 4px;
`;

const InnerContainer = styled.div`
  display:flex;
  flexDirection: row;
`

const mapStateToProps = state => {
  return {
    decks: state.decksReducer.decks,
    cards: state.cardsReducer.cards
  }
}

export default connect(mapStateToProps)(GetterCard);
