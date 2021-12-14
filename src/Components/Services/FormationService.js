import axios from 'axios';

const FORMATION_REST_URL = "http://localhost:8080/api/formations/";

class FormationService {

    getFormations() {
        return axios.get(FORMATION_REST_URL);
    }

    deleteFormation(id) {
        return axios.delete('http://localhost:8080/api/formations/' + id)
        
    }

    updateFormation(formation) {
        return axios.put('http://localhost:8080/api/formations/' + formation.id, formation)
    }
}

export default new FormationService();