import axios from 'axios';


const instance =  axios.create({
    baseURL:'https:burger-app-cb137.firebaseio.com/'

});
export default  instance;