package com.portfolio.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.api.entity.Proyect;
@Repository
public interface ProyectRepository  extends JpaRepository<Proyect, Long>{

}
