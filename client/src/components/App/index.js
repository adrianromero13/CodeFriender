import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './../Banner';
import UserForm from './../UserForm';
// import Footer from './../Footer';
import UserCard from './../UserCard';
import Match from "../Match";
// import Users from './../RenderCards';



const App = props => (
  <Router>
    {/* //grab semantic ui grid system. put header and footer in individual rows so that there is no overlapping with responsive version.
    // main row with routes */}
    <Banner/>
    <Route exact path="/" component={UserForm}/>
    <Route exact path="/profile" component={UserCard}/>
  <Route exact path="/match" component ={Match}/>
    {/* <Footer/> */}
  </Router>
);
export default App;