import React from 'react';
import { Home, About, Contact } from './pages/';
import Nav from './layout/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

    <div>
      
      <Router>
        
        <Nav />
      
      <Switch>

        <Route path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>
      </Router>
      
    </div>

  );

}

export default App;
