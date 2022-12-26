package com.portfolio.api.service;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.portfolio.api.entity.Skill;

public interface SkillService {
	public Iterable<Skill>findAll();
	public Page<Skill>findAll(Pageable pageable);
	public Optional<Skill>findById(Long id);
	public Skill save(Skill skill);
	public void deleteById(long id);

}
