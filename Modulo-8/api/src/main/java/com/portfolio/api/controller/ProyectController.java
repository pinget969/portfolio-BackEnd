package com.portfolio.api.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.api.entity.Proyect;
import com.portfolio.api.service.ProyectService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/proyects")
public class ProyectController {
	
	@Autowired
	private ProyectService proyectService;
	
	@PostMapping
	public ResponseEntity<?> create(@RequestBody Proyect proyect) {
		return ResponseEntity.status(HttpStatus.CREATED).body(proyectService.save(proyect));
	}
	@GetMapping("/{id}") //{valorCualquiera}
	public ResponseEntity<?> read(@PathVariable Long id){
		Optional<Proyect> oProyect = proyectService.findById(id);	
		if(!oProyect.isPresent()) {
			return ResponseEntity.notFound().build(); 
		}
		return ResponseEntity.ok(oProyect);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@RequestBody Proyect proyectDetails, @PathVariable(value = "id") Long proyectId){
		Optional<Proyect> proyect = proyectService.findById(proyectId);
		if(!proyect.isPresent()) {
			return ResponseEntity.notFound().build(); 
		}
		proyect.get().setTitle(proyectDetails.getTitle());
		proyect.get().setCompany(proyectDetails.getCompany());
		proyect.get().setDate(proyectDetails.getDate());
		proyect.get().setContent(proyectDetails.getContent());
		proyect.get().setImg(proyectDetails.getImg());
		proyect.get().setTools(proyectDetails.getTools());
		proyect.get().setWeb(proyectDetails.getWeb());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(proyectService.save(proyect.get()));
		}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable(value = "id") Long proyectId){
		if(!proyectService.findById(proyectId).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		proyectService.deleteById(proyectId);
		return ResponseEntity.ok().build();
	}
	@GetMapping
	public List<Proyect> readAll(){
		System.out.println("Saliendo All Proyect");
		List<Proyect> proyects = StreamSupport
		.stream(proyectService.findAll().spliterator(), false)
		.collect(Collectors.toList());
		return proyects;
	}
}
