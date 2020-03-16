import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { editCard, deleteCard } from '../actions/cardsActions';

const style = {
  borderRadius: 3,
  border: 1,
  color: 'black',
  height: 15,
  width:20,
  padding: '0 4px',
  boxShadow: '0 3px 2px 2px rgba(33, 100, 350, .3)',
};


function GetterCardButtons(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    console.log("Hello")
  }

  const handleDelete = (event) => {
    deleteCard(props.cardId)
  }

  return (
    <span>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon style={style}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onBlur={handleClose}
      >
        <MenuItem onClick={handleClose} onMouseDown={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleClose} onMouseDown={handleDelete}>Delete</MenuItem>
      </Menu>
    </span>
  );
}

export default connect(null, {deleteCard} )(GetterCardButtons);
