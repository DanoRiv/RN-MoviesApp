import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '7c2581ef2cb930eff1cbe11332330962',
    language: 'es-ES',
  },
});

export default movieDb;
