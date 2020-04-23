import React from "react";
// import Counter from './../../components/Counter';]\
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Banner from './../Banner';
import UserForm from './../UserForm';
import Footer from './../Footer';


const App = props => (
  <div className="container">
    <Banner/>
    <UserForm/>
    <Footer/>
  </div>
  // <Router>
  //   <div className="container">
      
    
  //     <Route exact path="/" component={TodoForm}/>
  //     <Route exact path="/comments" component={Comments}/>
  //     <Route exact path="/todos/:todoId" component={TodoListItem}/>  
  //   </div>
  // </Router>
);
export default App;