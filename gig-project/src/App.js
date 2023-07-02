import React from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GigList from "./components/GigList";
import Gig from "./components/Gig";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Gig App</h1>
        <Switch>
          <Route exact path="/" component={GigList} />
          <Route exact path="/gigs/:id" component={Gig} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
