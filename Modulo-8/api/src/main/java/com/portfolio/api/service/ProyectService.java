package com.portfolio.api.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.portfolio.api.entity.Proyect;

public interface ProyectService {
	public Iterable<Proyect>findAll();
	public Page<Proyect>findAll(Pageable pageable); 
	public Optional<Proyect>findById(Long id); 
	public Proyect save(Proyect proyect); 
	public void deleteById(long id);

}
