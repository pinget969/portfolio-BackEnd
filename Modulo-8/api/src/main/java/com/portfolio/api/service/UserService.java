package com.portfolio.api.service;

import java.util.List;
import java.util.Optional;


import com.portfolio.api.entity.User;

public interface UserService {
	public List<User>findAll(); 
	public Optional<User>findById(Long id); 
	public User save(User user); 
	public void deleteById(long id);
	public User findByEmail(String email) throws Exception; //Agregado
}
