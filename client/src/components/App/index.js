import React from "react";
// import Counter from './../../components/Counter';]\
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import 'semantic-ui-css/semantic.min.css'

import FormExampleFieldControlId from './../InputForm';
const App = props => (
  <FormExampleFieldControlId/>
  // <Router>
  //   <div className="container">
      
    
  //     <Route exact path="/" component={TodoForm}/>
  //     <Route exact path="/comments" component={Comments}/>
  //     <Route exact path="/todos/:todoId" component={TodoListItem}/>  
  //   </div>
  // </Router>
);
export default App;