import React from "react";

const GigItem = ({ gig }) => {
  return (
    <div>
      <h3>{gig.title}</h3>
      <p>{gig.description}</p>
    </div>
  
}