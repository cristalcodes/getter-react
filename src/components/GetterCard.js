import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GetterCardButtons from './GetterCardMenu';
import MenuIcon from '@material-ui/icons/Menu';


const Container = styled.div`
  padding-bottom: 4px;
`;

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
          <Typography style={{margin:5}} gutterBottom>
            {this.props.title}
          </Typography>
          {this.state.showingButtons? <GetterCardButtons /> : " "}
        </Card>
      </Container>
      </div>
  )}
}



export default GetterCard;
