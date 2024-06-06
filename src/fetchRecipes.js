import axios from 'axios';

const fetchRecipes = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/recipes'); // URL anpassen
    return response.data;
  } catch (error) {
    if (error.response) {
      // Der Server hat eine Antwort gesendet, aber mit einem Statuscode außerhalb des 2xx-Bereichs
      console.error('Server responded with a status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // Die Anfrage wurde gesendet, aber keine Antwort erhalten
      console.error('No response received:', error.request);
    } else {
      // Ein Fehler trat bei der Anfrageausführung auf
      console.error('Error during request:', error.message);
    }
    throw error;
  }
};

export default fetchRecipes;
