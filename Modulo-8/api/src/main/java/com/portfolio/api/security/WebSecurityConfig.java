package com.portfolio.api.security;
/*
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
 

@Configuration
@EnableWebSecurity
public class WebSecurityConfig  {
	
	 @Bean
	 protected void configure(HttpSecurity http) throws Exception {
		  http
		 .httpBasic()
		 .authorizeRequests()
		 .antMatchers("/publicado/**").permitAll()
		 .antMatchers("/admin/**").hasRole("ADMIN")
		 .anyRequest().authenticated();
		 
	 }
	 @Bean
	 protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		 auth
		 .inMemoryAuthentication()
		 .withUser("jcabelloc").password("{noop}" + "secreto").roles("USER")
		 .and()
		 .withUser("mlopez").password("{noop}" + "secreto").roles("ADMIN");
		 }
	 }

}
 */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
