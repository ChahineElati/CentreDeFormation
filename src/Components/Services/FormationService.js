import axios from 'axios';

const FORMATION_REST_URL = "http://localhost:8080/api/formations/";

class FormationService {

    getFormations() {
        return axios.get(FORMATION_REST_URL);
    }
}

export default new FormationService();