import axios from 'axios';

function getWorkshops() {
    return axios.get(`https://workshops-server.herokuapp.com/workshops/`)
        .then(response => response.data);
}

export {
    getWorkshops
};