// src/googleBooksService.ts
import axios from 'axios';

const apiKey = 'AIzaSyAvrvt_qN7X4lvRWTU70r1qG1V6qQf3Auw';

export const searchBooks = async (query: string) => {
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query,
        key: apiKey,
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error fetching data from Google Books API', error);
    throw error;
  }
};
