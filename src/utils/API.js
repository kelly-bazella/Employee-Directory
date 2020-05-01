import axios from 'axios';

export default {
    getEmployees: (amount) => axios.get(`https://randomuser.me/api/?results=${amount}&nat=us`)
}