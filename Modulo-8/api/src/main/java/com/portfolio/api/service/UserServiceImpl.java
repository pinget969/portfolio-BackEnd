package com.portfolio.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.portfolio.api.entity.User;
import com.portfolio.api.repository.RolRepository;
import com.portfolio.api.repository.UserRepository;
import com.portfolio.api.security.domain.JwtUtil;

@Service
public class UserServiceImpl implements UserService {

    
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final RolRepository rolRepository;
	private final JwtUtil jwtUtil;

	public UserServiceImpl(UserRepository userRepository, RolRepository rolRepository,
							  @Lazy PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {

		this.userRepository = userRepository;
		this.rolRepository = rolRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtUtil = jwtUtil;
	}
/*	private JwtUtil jwtUtil = new JwtUtil();
	
	public UserServiceImpl(PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {

		this.passwordEncoder = passwordEncoder;
		this.jwtUtil = jwtUtil;

}*/

	@Override
	@Transactional
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	@Override
	@Transactional
	public User findByEmail(String email) throws Exception {
		System.out.println("EMAAAAIL ----------------");
		System.out.println(email);
        return userRepository.findByEmail(email).orElseThrow(() -> new Exception());
    }

	@Override
	@Transactional(readOnly = true)
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}
	
	@Override
	@Transactional
	public User save(User user) {
		try {
			if(findAll().size()>0) {
				user.setRol(rolRepository.findById(1L).orElseThrow(()-> new Exception("Rol no encontrado")));
			}
			user.setRol(rolRepository.findById(2L).orElseThrow(()-> new Exception("Rol no encontrado")));
		} catch (Exception e) {
			e.printStackTrace();
		}
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setEnabled(true);
		return userRepository.save(user);
	}

	@Override
	@Transactional
	public void deleteById(long id) {
		userRepository.deleteById(id);
	}
	
	
	
	
}
