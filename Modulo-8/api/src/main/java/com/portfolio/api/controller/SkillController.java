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

import com.portfolio.api.entity.Skill;
import com.portfolio.api.service.SkillService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/skills")
public class SkillController {
	@Autowired
	private SkillService skillService;
	
	@PostMapping
	public ResponseEntity<?> create(@RequestBody Skill skill){
		return ResponseEntity.status(HttpStatus.CREATED).body(skillService.save(skill));
	}
	@GetMapping("/{id}")
	public ResponseEntity<?> read(@PathVariable Long id){
		Optional<Skill> oSkill = skillService.findById(id);
		if(!oSkill.isPresent()) {
			return ResponseEntity.notFound().build(); 
		}
		return ResponseEntity.ok(oSkill);
	}
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@RequestBody Skill skillDetails, @PathVariable(value = "id") Long skillId){
		Optional<Skill> skill = skillService.findById(skillId);
		if(!skill.isPresent()) {
			return ResponseEntity.notFound().build(); 
		}
		skill.get().setTitle(skillDetails.getTitle());
		skill.get().setComentario(skillDetails.getComentario());
		skill.get().setImg(skillDetails.getImg());
		skill.get().setEnabled(skillDetails.getEnabled());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(skillService.save(skill.get()));
		}
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable(value = "id") Long skillId){
		if(!skillService.findById(skillId).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		skillService.deleteById(skillId);
		return ResponseEntity.ok().build();
	}
	@GetMapping
	public List<Skill> readAll(){
		List<Skill> skills = StreamSupport
		.stream(skillService.findAll().spliterator(), false)
		.collect(Collectors.toList());
		return skills;
	}
}
