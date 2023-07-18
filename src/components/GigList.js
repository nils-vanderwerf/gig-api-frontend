import React from "react";
import Gig from "./Gig";

const GigList = ({ gigs }) => {
  return (
    <div>
      <h2>Gigs</h2>
      {gigs.map((gig) => (
        <Gig key={gig.id} gig={gig} />
      ))}
    </div>
  );
}

export default GigList;