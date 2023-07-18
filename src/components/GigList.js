import React, { useEffect, useState } from "react";
import { getGigs } from "../services/api";

const GigList = () => {
  const [gigs, setGigs] = useState([])
  
  useEffect(() => {
    // Fetch gigs when the component moments
    getGigs()
    .then((response) => {
      console.log('API Response:', response);
      // setGigs(response.data); // Uncomment this line if you want to set the state with the response data
    })
    .catch((error) => {
      console.error('Error fetching gigs:', error);
    });
  }, []);
}

export default GigList;