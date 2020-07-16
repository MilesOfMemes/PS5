import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import axios from "axios";
import './App.css';

class App extends React.Component {
  

  render(){
    return (
      <div>
        <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </ul>
      </nav>

      <div>
        {/*place mapper here?*/ }
      </div>

      <Switch>
       <Route path="/create">
          <Create />
       </Route>

       <Route path="/edit">
          <Edit />
       </Route>

       
       <Route exact path="/">
          <Home/>
        </Route>
        </Switch>
       </Router>
        
      </div>
    );
  }

  
}

export default App;
