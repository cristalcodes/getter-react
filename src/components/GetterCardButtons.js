import React from 'react';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { editCard, deleteCard } from '../actions/cardsActions';

class GetterDeleteButtons extends React.Component{

  handleDeleteClick = () => {
    this.props.deleteCard(this.props.cardId)
  }
  render(){
    return (
      <span>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleDeleteClick}>
            <DeleteIcon />
        </Button>
      </span>
      );
  }
}



export default connect(null, {deleteCard} )(GetterDeleteButtons);
