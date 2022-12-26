package com.portfolio.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.portfolio.api.entity.Proyect;
 import com.portfolio.api.repository.ProyectRepository;

@Service
public class ProyectServiceImpl implements ProyectService {
	@Autowired 
	private ProyectRepository proyectRepository;

	@Override
	@Transactional(readOnly = true)
	public Iterable<Proyect> findAll() {
		return proyectRepository.findAll();
	}

	@Override
	@Transactional
	public Page<Proyect> findAll(Pageable pageable) {
		return proyectRepository.findAll(pageable);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<Proyect> findById(Long id) {
		return proyectRepository.findById(id);
	}

	@Override
	@Transactional
	public Proyect save(Proyect proyect) {
		return proyectRepository.save(proyect);
	}

	@Override
	@Transactional
	public void deleteById(long id) {
		proyectRepository.deleteById(id);
		
	}

}
