package com.chahine_louay.centre_de_formation_backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chahine_louay.centre_de_formation_backend.repository.AdminRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/admins/")
public class AdminController {

	AdminRepository adminRepos;
}
