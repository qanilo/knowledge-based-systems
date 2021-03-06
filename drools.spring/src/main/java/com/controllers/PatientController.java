package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Patient;
import com.services.PatientSI;
import com.servicesimpl.IngredientService;
import com.servicesimpl.PatientService;


@RestController
public class PatientController {
	private final PatientSI patService;
	@Autowired
	private PatientController(PatientSI patService){
		this.patService = patService;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/patients")
	public List<Patient> getAll(){ return patService.getAll(); }
	
	@RequestMapping(method = RequestMethod.GET, value = "/patient/get/{id}")
	public Patient getOne(@PathVariable Long id){ return patService.findOne(id);}
	
	@RequestMapping(method = RequestMethod.POST, value = "/patient/add")
	public Patient add(@RequestBody Patient patient){ return patService.add(patient);}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/patient")
	public Patient edit(@RequestBody Patient patient){ return patService.update(patient);}

	@RequestMapping(method = RequestMethod.DELETE, value = "/patient/{id}")
	public void delete(@PathVariable Long id){ patService.delete(id);}
}
