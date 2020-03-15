import React from 'react';
import Icon from "@material-ui/core/Icon";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import '@atlaskit/css-reset';


const OpenFormButtonContainer = styled.div`
marginTop: 8
padding: 1px;
background-color:#ebeef2;
flex-grow:1;
`;

const CardContainer = styled.div`
padding: 4px;
background-color:#ebeef2;
`;

const buttonStyle = {
  backgroundColor: "white",
  margin:3,
}

class GetterAddButton extends React.Component {

  state = {
    formIsOpen : false,
    title: ""
  }

  openFormButton = () => {
    const list = this.props;
    const buttonTitle = list ? "Add a Card" : "Add a List"

    return(
      <OpenFormButtonContainer>
        <Card onClick={this.openForm} style={{backgroundColor: "white", margin:3}}>
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



        <Button variant ="contained" size="small" color="primary">
          {buttonTitle}
        </Button>
        <Icon>x</Icon>

</CardContainer>
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
    return this.state.formIsOpen ? this.form() : this.openFormButton();
  }
}

export default GetterAddButton;
