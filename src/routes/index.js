import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "../components/home"


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
      </div>
    </Router>

  )
}

export default AppRouter;
