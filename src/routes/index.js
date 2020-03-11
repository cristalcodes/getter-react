import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "../components/home";
import Decks from "../components/deck/decks";


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
        <Route exact path="/decks" component={Decks} />
      </div>
    </Router>

  )
}

export default AppRouter;
