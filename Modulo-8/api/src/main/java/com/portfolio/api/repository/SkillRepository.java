package com.portfolio.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.api.entity.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

}
