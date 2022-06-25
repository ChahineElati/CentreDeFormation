package com.chahine_louay.centre_de_formation_backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chahine_louay.centre_de_formation_backend.repository.FormateurRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/formateurs/")
public class FormateurController {
	
	FormateurRepository formateurRepos; 
}