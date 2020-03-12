import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "../components/home";
import Deck from "../components/deck/deck";


const Navbar = () =>(
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/decks">Decks</NavLink>
  </div>
)


const AppRouter = () => {
  return(

    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/decks" component={Deck} />
      </div>
    </Router>
    

  )
}

export default AppRouter;
