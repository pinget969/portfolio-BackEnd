package com.portfolio.api.security.domain;


import com.portfolio.api.entity.User;
import com.portfolio.api.service.UserService;

import org.springframework.security.core.GrantedAuthority;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserService service;

    public UserDetailsServiceImpl(UserService service) {
        this.service = service;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
    	User user = new User();
		try {
			user = service.findByEmail(email);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        if (user == null) {
            throw new UsernameNotFoundException("User not found in the database");
        } else {
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(getAuthority(user));
            return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
        }
    }

    private GrantedAuthority getAuthority(User user) {

        if (user.getRol().getId() == 1L) {
            return new SimpleGrantedAuthority("ROLE_ADMIN");
        }
        if (user.getRol().getId() == 2L) {
            return new SimpleGrantedAuthority("ROLE_USER");
        }
        return null;
    }
}
