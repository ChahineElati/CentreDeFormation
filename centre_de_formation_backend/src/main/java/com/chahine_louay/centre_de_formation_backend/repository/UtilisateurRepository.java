package com.chahine_louay.centre_de_formation_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chahine_louay.centre_de_formation_backend.model.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer>{
	Utilisateur findByEmailAndMotDePasse(String email, String mdp);
}
