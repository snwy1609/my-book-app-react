import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Create a function that makes GET requests with a path parameter
export const fetchApiData = async <T>(path: string): Promise<T | null> => {
  try {
    const response: AxiosResponse <T> = await axios.get(`${BASE_URL}${path}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
