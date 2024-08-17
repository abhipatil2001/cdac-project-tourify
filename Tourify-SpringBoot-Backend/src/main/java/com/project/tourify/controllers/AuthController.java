package com.project.tourify.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.UserDto;
import com.project.tourify.entities.User;
import com.project.tourify.exceptions.ApiException;
import com.project.tourify.security.JwtAuthRequest;
import com.project.tourify.security.JwtAuthResponse;
import com.project.tourify.security.JwtTokenHelper;
import com.project.tourify.services.IUserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth/api")
public class AuthController {

	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception{
		System.out.println("Attempting to authenticate user...");
		this.authenticate(request.getUsername(), request.getPassword());
		System.out.println("authenticated");
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
		String generatedToken = this.jwtTokenHelper.generateToken(userDetails);
		System.out.println("token" + generatedToken);
		JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
		jwtAuthResponse.setToken(generatedToken);
		jwtAuthResponse.setUser(this.modelMapper.map((User)userDetails, UserDto.class));
		jwtAuthResponse.setStatus("success"); // Set status to success   added by me
		if(jwtAuthResponse != null)
			System.out.println(jwtAuthResponse);
		return new ResponseEntity<JwtAuthResponse>(jwtAuthResponse, HttpStatus.OK);
	}

	private void authenticate(String username, String password) throws Exception {
		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, password);
		try {
			System.out.println("inside try of authenticate");
			this.authenticationManager.authenticate(authentication);
			System.out.println("Authentication done in authenticate method");
		} catch (BadCredentialsException e) {
			System.out.println("Invalid Details !!");
			throw new ApiException("Invalid username or password !!");
		}		
	}
	
	// register new user api
	@PostMapping("/register")
	public ResponseEntity<UserDto> registerUser(@RequestBody UserDto userDto){
		UserDto registeredNewUser = this.userService.createUser(userDto);
		
		return new ResponseEntity<UserDto>(registeredNewUser, HttpStatus.CREATED);
	}
}
