import axios from 'axios';

const instance = axios.create( {
    baseURL: "https://saiteja-erukude-portfolio.herokuapp.com/",
} );

export default instance;
