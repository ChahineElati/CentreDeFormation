package com.chahine_louay.centre_de_formation_backend.model;

import java.util.Date;

import javax.persistence.*;

import org.springframework.format.annotation.NumberFormat;

@Entity

@Table(name = "formations")
public class Formation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String titre;
	
	@Temporal(TemporalType.DATE)
	private Date dateDebut;
	private int duree;
	private String type;
	private float prix;
	private String etat;
	private int nbrCandidat;
	private int nbrCondidatMax;
	private String categorie;
	private String description;
	private String nomFormateur;
	
	Formation(){
		
	}

	public Formation(String titre, Date dateDebut, int duree, String type, float prix,
			int nbrCondidatMax, String categorie, String description, String nomFormateur) {
		super();
		this.titre = titre;
		this.dateDebut = dateDebut;
		this.duree = duree;
		this.type = type;
		this.prix = prix;
		this.etat = "non terminée";
		this.nbrCandidat = 0;
		this.nbrCondidatMax = nbrCondidatMax;
		this.categorie = categorie;
		this.description = description;
		this.nomFormateur = nomFormateur;
	}

	public String getNomFormateur() {
		return nomFormateur;
	}

	public void setNomFormateur(String nomFormateur) {
		this.nomFormateur = nomFormateur;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public int getDuree() {
		return duree;
	}

	public void setDuree(int duree) {
		this.duree = duree;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public int getNbrCandidat() {
		return nbrCandidat;
	}

	public void setNbrCandidat(int nbrCandidat) {
		this.nbrCandidat = nbrCandidat;
	}

	public int getNbrCondidatMax() {
		return nbrCondidatMax;
	}

	public void setNbrCondidatMax(int nbrCondidatMax) {
		this.nbrCondidatMax = nbrCondidatMax;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
