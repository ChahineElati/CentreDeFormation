package com.chahine_louay.centre_de_formation_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chahine_louay.centre_de_formation_backend.model.Utilisateur;
import com.chahine_louay.centre_de_formation_backend.repository.UtilisateurRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/utilisateurs/")
public class UtilisateurController {
	
	@Autowired
	UtilisateurRepository utilisateurRepos;
	
	@PostMapping
	public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) {
		return utilisateurRepos.save(utilisateur);
	}
	
	@GetMapping(path = "{email}/{mdp}")
	public Utilisateur getUtilisateurByEmailAndMotDePasse(@PathVariable String email, @PathVariable String mdp) {
		return utilisateurRepos.findByEmailAndMotDePasse(email, mdp);
	}
	
}
