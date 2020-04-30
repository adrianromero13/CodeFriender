import React from "react";
// import Counter from './../../components/Counter';]\
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './../Banner';
import UserForm from './../UserForm';
import Footer from './../Footer';
import UserCard from './../UserCard';
// import Users from './../RenderCards';



const App = props => (
  <Router>
    {/* //grab semantic ui grid system. put header and footer in individual rows so that there is no overlapping with responsive version.
    // main row with routes */}
    <Banner/>
    <Route exact path="/" component={UserForm}/>
    <Route exact path="/profile" component={UserCard}/>
    {/* <Route exact path ="/users" component={Users}/> */}
    <Footer/>
  </Router>
  
  // <Router>
  //   <div className="container">
      
    
  //     <Route exact path="/" component={TodoForm}/>
  //     <Route exact path="/comments" component={Comments}/>
  //     <Route exact path="/todos/:todoId" component={TodoListItem}/>  
  //   </div>
  // </Router>
);
export default App;