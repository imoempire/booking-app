import axios from 'axios';

const client = axios.create({
   baseUrl: 'http://'
});

export default client