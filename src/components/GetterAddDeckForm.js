import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addDeck } from '../actions/decksActions'

const FormContainer=styled.div`
margin: 8px;
border: 1px solid lightgrey;
background-color: "#ebeef2";
border-radius: 2px;
width: 260px;
height: "100%";
display:flex;
flex-direction: column;
`;

class AddDeckForm extends React.Component{

  state = {
    deck: {
      name: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      deck: {
        ...this.state.deck,
        name: event.target.value
      }
    })
  }

  handleSubmit =() => {
    console.log(this.state.name)
    const deck = this.state.deck
    this.props.addDeck(deck);
    this.setState({
      card: {
        ...this.state.card,
        title:""
      }
    })
  }

  render(){
    return(
      <div>
      <FormContainer>
        <TextField required id="standard-required" label="Required" defaultValue="Deck Name" onChange={this.handleInputChange}/>

      </FormContainer>
      <Button variant="contained" style={{margin: 8}} onClick={this.handleSubmit}> Add Deck</Button>
      </div>
    )
  }
}

export default connect(null, { addDeck })(AddDeckForm);
