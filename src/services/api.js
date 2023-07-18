import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getGigs = () => axios.get(`${API_BASE_URL}/gigs`);
export const getArtists = () => axios.get(`${API_BASE_URL}/artists`);
export const getVenues = () => axios.get(`${API_BASE_URL}/venues`);
export const getGenres = () => axios.get(`${API_BASE_URL}/venues`);
// Add other API functions for creating, updating, and deleting gigs if needed
