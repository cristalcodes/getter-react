import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const style = {
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  borderRadius: 10,
  border: 0,
  color: 'white',
  height: 15,
  width:20,
  padding: '0 8px',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
};


export default function GetterCardButtons() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={style}/>
    </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
