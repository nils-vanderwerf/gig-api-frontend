import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getAllGigs = () => axios.get(`${API_BASE_URL}/gigs`);
// Add other API functions for creating, updating, and deleting gigs if needed
