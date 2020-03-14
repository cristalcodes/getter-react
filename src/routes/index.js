import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "../components/home";
import GetterApp from "../components/GetterApp";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () =>(
  <div >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" >
            <NavLink to="/" style={{color: 'white', textDecoration: 'none', marginRight: 10}} >Home</NavLink>
          </Typography>
          <Typography variant="h6">
              <NavLink to="/decks" style={{color: 'white', textDecoration: 'none', marginRight:10}} >Decks</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

)


const AppRouter = () => {
  return(
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/decks" component={GetterApp} />
      </div>
    </Router>
  )
}

export default AppRouter;
