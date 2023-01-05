package com.portfolio.api.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.api.entity.Login;
import com.portfolio.api.entity.User;
import com.portfolio.api.security.domain.AunthenticationResponse;
import com.portfolio.api.security.domain.JwtUtil;
import com.portfolio.api.service.UserService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {

	private final AuthenticationManager authenticationManager;
	private final UserDetailsService userDetailsService;
	private final UserService userService;
	private final JwtUtil jwtUtil;

	public AuthController(AuthenticationManager authenticationManager,UserDetailsService userDetailsService,JwtUtil jwtUtil,UserService userService) {
		this.authenticationManager = authenticationManager;
		this.userDetailsService= userDetailsService;
		this.jwtUtil=jwtUtil;
		this.userService=userService;
	}

	@PostMapping("/login")
	public ResponseEntity<?> login (@RequestBody Login user) throws Exception{
		System.out.println(user.getEmail());
		String jwt = login(user.getEmail(), user.getPassword());
		
		return ResponseEntity.ok().body(new AunthenticationResponse(jwt));
	}

	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody User user,HttpServletResponse response ) {
		userService.save(user);
		//String jwt = login(user.getEmail(), user.getPassword());
		//response.addHeader("Authorization", jwt);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	private String login(String email, String password){
		Authentication authentication;
		try {
			authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(email, password));
			SecurityContextHolder.getContext().setAuthentication(authentication);

		} catch (BadCredentialsException e) {
			throw  new BadCredentialsException(e.getMessage());
		}
		final UserDetails userDetails = userDetailsService.loadUserByUsername(email);
		final String jwt = jwtUtil.generateToken(userDetails);
		return jwt;
	}

}
