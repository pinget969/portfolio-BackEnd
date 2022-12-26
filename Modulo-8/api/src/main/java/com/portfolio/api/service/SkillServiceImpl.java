package com.portfolio.api.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.portfolio.api.entity.Skill;
import com.portfolio.api.repository.SkillRepository;

@Service
public class SkillServiceImpl implements SkillService {
	@Autowired 
	private SkillRepository skillRepository;

	@Override
	@Transactional(readOnly = true)
	public Iterable<Skill> findAll() {
		return skillRepository.findAll();
	}

	@Override
	@Transactional
	public Page<Skill> findAll(Pageable pageable) {
		return skillRepository.findAll(pageable);
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<Skill> findById(Long id) {
		return skillRepository.findById(id);
	}

	@Override
	@Transactional
	public Skill save(Skill skill) {
		return skillRepository.save(skill);
	}

	@Override
	@Transactional
	public void deleteById(long id) {
		skillRepository.deleteById(id);
		
	}

}
