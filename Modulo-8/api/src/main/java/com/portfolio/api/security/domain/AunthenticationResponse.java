package com.portfolio.api.security.domain;

public class AunthenticationResponse {

    private final String jwt;

    public AunthenticationResponse(String jwt){
        this.jwt=jwt;
    }

	public String getJwt() {
		return jwt;
	}
}