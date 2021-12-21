import axios from "axios";

const UTILISATEUR_REST_URL = "http://localhost:8080/api/utilisateurs/";

class UtilisateurService {
    
    addUtilisateur(utilisateur) {
        return axios.post(UTILISATEUR_REST_URL, utilisateur);
    }

    getUtilisateurByEmail(email, pwd){
        return axios.get(UTILISATEUR_REST_URL + email + "/" + pwd);
    }
}

export default new UtilisateurService();