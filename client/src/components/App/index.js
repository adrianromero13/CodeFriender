import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Banner from '../../containers/Banner';
import UserForm from './../UserForm';
import UserCard from '../../containers/UserCard';
import Match from "../../containers/Match";



const App = props => (
  <Router>
    <Banner />
    <Route exact path="/" component={UserForm} />
    <Route exact path="/profile" component={UserCard} />
    <Route exact path="/match" component={Match} />
    {/* <Footer/> */}
  </Router>
);
export default App;