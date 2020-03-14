import React from 'react';
import Icon from "@material-ui/core/Icon";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

const FormButtonContainer = styled.div`
  marginTop: 8,
  display: "flex",
  alignItems: "center"
`;

const OpenFormButtonContainer = styled.div`
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: 10,
  height: 36,
  width: "100%",
  paddingLeft: 10
`;

const CardContainer = styled.div`
padding: 8px;
background-color:inherit;

`;

const buttonStyle = {
  color: "white",
  backgroundColor: "#5aac44",
  margin:3,
}

class GetterAddButton extends React.Component {

  state = {
    formIsOpen : false,
    title: ""
  }

  addButton = () => {
    const list = this.props;
    const buttonTitle = list ? "Add a Card" : "Add a List"

    return(
      <OpenFormButtonContainer>
        <Card onClick={this.openForm} style={{color: "white", backgroundColor: "green", margin:3}}>
          <Icon>+</Icon>
            {buttonTitle}
        </Card>
      </OpenFormButtonContainer>
    )
  }


  openForm = () => {
    this.setState({
      formIsOpen: true
    })
  }

  form = () => {
    const {list}= this.props;
    const placeholderText = list ? "Enter deck name..." : "Enter card title... ";
    const buttonTitle = list ? "Add deck" : "Add card";

    return(
      <div>

        <CardContainer>
          <Card>
            <TextareaAutosize
            placeholder={placeholderText}
            autoFocus
            onBlur={this.closeForm}
            onChange={this.handleInputChange}
            style={{
              resize:"none",
              width: "100%",
              overflow: "hidden",
              outline: "none",
              border:"none"
            }}/>
          </Card>
        </CardContainer>

      <FormButtonContainer>
        <Button variant ="contained" style={buttonStyle}>
          {buttonTitle}
        </Button>
        <Icon style={{marginLeft:8, cursor: "pointer"}}>x</Icon>
      </FormButtonContainer>

        </div>
    )
  }

  closeForm = (event) => {
    this.setState({
      formIsOpen : false
    })
  }

  handleInputChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  render(){
    return this.state.formIsOpen ? this.form() : this.addButton();
  }
}

export default GetterAddButton;
