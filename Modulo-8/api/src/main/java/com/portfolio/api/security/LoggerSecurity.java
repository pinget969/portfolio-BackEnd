package com.portfolio.api.security;

/*

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("")
public class LoggerSecurity {
	
	 private static final Logger logger = LoggerFactory.getLogger(LoggerSecurity.class);
	
	 @GetMapping("/mensaje")
	  public ResponseEntity<?> getMensaje() {
	    var auth =  SecurityContextHolder.getContext().getAuthentication();
	    logger.info("Datos del Usuario: {}", auth.getPrincipal());
	    logger.info("Datos de los Permisos {}", auth.getAuthorities());
	    logger.info("Esta autenticado {}", auth.isAuthenticated());

	    Map<String, String> mensaje = new HashMap<>();
	    mensaje.put("contenido", "Hola Peru");
	    return ResponseEntity.ok(mensaje);
	  }
	 
	 @GetMapping("/admin")
	 public ResponseEntity<?> getMensajeAdmin(){
		 
		 var auth = SecurityContextHolder.getContext().getAuthentication();
		 logger.info("Datos del Usuario: {}", auth.getPrincipal());
		 logger.info("Datos de los Permisos: {}", auth.getAuthorities());
		 logger.info("Esta autenticado {}", auth.isAuthenticated());
		 
		 Map<String, String> mensaje = new HashMap<>();
		 mensaje.put("contenido", "hola admin");
		 return ResponseEntity.ok(mensaje);

	 }
	 @GetMapping("/publico")
	 public ResponseEntity<?> getMensajePublico(){
		 
		 var auth = SecurityContextHolder.getContext().getAuthentication();
		 logger.info("Datos del Usuario: {}", auth.getPrincipal());
		 logger.info("Datos de los Permisos: {}", auth.getAuthorities());
		 logger.info("Esta autenticado {}", auth.isAuthenticated());
		 
		 Map<String, String> mensaje = new HashMap<>();
		 mensaje.put("contenido", "hola Mundo Public");
		 return ResponseEntity.ok(mensaje);

	 }


}
*/











