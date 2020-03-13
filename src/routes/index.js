import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "../components/home";
import GetterApp from "../components/GetterApp";


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
        <Route exact path="/decks" component={GetterApp} />
      </div>
    </Router>


  )
}

export default AppRouter;
