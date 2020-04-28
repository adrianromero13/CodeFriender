import React from "react";
// import Counter from './../../components/Counter';]\
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './../Banner';
import UserForm from './../UserForm';
import Footer from './../Footer';
// import Profile from './../../containers/UserCard';



const App = props => (
  <Router>
    <Banner/>
    <Route exact path="/" component={UserForm}/>
    {/* <Route exact path="/profile" component={Profile}/> */}
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