package com.chahine_louay.centre_de_formation_backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chahine_louay.centre_de_formation_backend.repository.CandidatRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/candidats/")
public class CandidatController {
	
	CandidatRepository candidatRepos;
}
