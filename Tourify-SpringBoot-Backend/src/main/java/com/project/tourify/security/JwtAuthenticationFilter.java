package com.project.tourify.security;

import java.io.IOException;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		// 1. Get Token
		String requestToken = request.getHeader("Authorization"); // here Authorization is a key for which mapping value will be token
		// Token format will be like: Bearer va6sdbv6as1df5f4s46v4sa684v6
		
		System.out.println("gotTokenFromRequest: "+requestToken);
		
		String username = null;
		
		String token = null;
		
		if(requestToken != null && requestToken.startsWith("Bearer")) {
			
			token = requestToken.substring(7);   // why 7? Bcoz Bearer word has 6 chars and then 1 space..uske baad ki sari string matlab hamara token hoga
			
			try {
				username = this.jwtTokenHelper.getUsernameFromToken(token);
			} catch (IllegalArgumentException e) {
				System.out.println("Unable to get jwt token");
			} catch(ExpiredJwtException e) {
				System.out.println("Jwt token has expired");
			} catch(MalformedJwtException e) {
				System.out.println("invalid jwt");
			} catch(Exception e) {
				e.printStackTrace();
			}
			
		}else {
			System.out.println("JWT is empty or does not begin with Bearer");
		}
		
		// Once we get the token..now validate
		if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
			System.out.println("user details " + userDetails);
			if(this.jwtTokenHelper.validateToken(token, userDetails)) {
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authentication);
			}else {
				System.out.println("Invalid jwt token");
			}
		}else {
			System.out.println("Username is null or context is not null");
		}
		System.out.println(request);
		filterChain.doFilter(request, response);
	}

}
