package com.chahine_louay.centre_de_formation_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chahine_louay.centre_de_formation_backend.model.Formation;
import com.chahine_louay.centre_de_formation_backend.repository.FormationRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/formations/")
public class FormationController {
	
	@Autowired
	private FormationRepository formationRepository;
	
	@GetMapping
	public List<Formation> getFormations() {
		return formationRepository.findAll();	
	}
	
	@PostMapping
	public Formation addFormation(@RequestBody Formation formation) {
		return formationRepository.save(formation);
	}
	
	@DeleteMapping("{id}")
	public void deleteFormation(@PathVariable int id) {
		formationRepository.deleteById(id);
	}
	
	@PutMapping("{id}")
	public Formation updateFormation(@RequestBody Formation newFormation, @PathVariable int id) {
		return formationRepository.findById(id)
				.map(formation -> {
					formation.setCategorie(newFormation.getCategorie());
					formation.setDateDebut(newFormation.getDateDebut());
					formation.setDescription(newFormation.getDescription());
					formation.setDuree(newFormation.getDuree());
					formation.setNbrCondidatMax(newFormation.getNbrCondidatMax());
					formation.setPrix(newFormation.getPrix());
					formation.setTitre(newFormation.getTitre());
					formation.setType(newFormation.getType());
					return formationRepository.save(formation);
				})
				.orElseGet(() -> {
					newFormation.setId(id);
					return formationRepository.save(newFormation);
				});
	}
}
