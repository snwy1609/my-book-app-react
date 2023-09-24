// apiService.js

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=romantic&key=AIzaSyAvrvt_qN7X4lvRWTU70r1qG1V6qQf3Auw';

export const getBooks = async (query) => {
    try {
        const response = await fetch(`${API_URL}?q=${query}`);
        const data = await response.json();
        return data.items; // Assuming your API returns an 'items' array
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
