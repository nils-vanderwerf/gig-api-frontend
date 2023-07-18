import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GigList from "./components/GigList";
import Gig from "./components/Gig";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Gig App</h1>
        <Routes>
          <Route exact path="/" element={<GigList/>} />
          <Route exact path="/gigs/:id" element={<Gig/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
