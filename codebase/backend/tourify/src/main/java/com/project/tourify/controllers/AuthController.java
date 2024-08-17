package com.project.tourify.controllers;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.UserDto;
import com.project.tourify.entities.User;
import com.project.tourify.exceptions.ApiException;
import com.project.tourify.response.ApiResponse;
import com.project.tourify.security.JwtAuthRequest;
import com.project.tourify.security.JwtAuthResponse;
import com.project.tourify.security.JwtTokenHelper;
import com.project.tourify.services.IUserService;
import com.project.tourify.services.impl.EmailService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth/api")
//@CrossOrigin(origins = "*")
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
	
    @Autowired
    private EmailService emailService;
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse<JwtAuthResponse>> createToken(@RequestBody JwtAuthRequest request) throws Exception{
		this.authenticate(request.getUsername(), request.getPassword());
		
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
		String generatedToken = this.jwtTokenHelper.generateToken(userDetails);
		
		JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
		jwtAuthResponse.setToken(generatedToken);
		jwtAuthResponse.setUser(this.modelMapper.map((User)userDetails, UserDto.class));
		
		List<JwtAuthResponse> list = new ArrayList<>();
		list.add(jwtAuthResponse);
		ApiResponse<JwtAuthResponse> response = new ApiResponse<JwtAuthResponse>("success", list);
		
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	private void authenticate(String username, String password) throws Exception {
		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, password);
		try {
			this.authenticationManager.authenticate(authentication);
		} catch (BadCredentialsException e) {
			System.out.println("Invalid Details !!");
			throw new ApiException("Invalid username or password !!");
		}		
	}
	
	// register new user api
	@PostMapping("/register")
	public ResponseEntity<ApiResponse<UserDto>> registerUser(@RequestBody UserDto userDto){
		UserDto registeredNewUser = this.userService.createUser(userDto);
		
		// let's send a welcome email to the user
		emailService.sendRegistrationEmail(
											registeredNewUser.getEmail(), 
											"Welcome to Tourify !!", 
											"Dear " + registeredNewUser.getName() + ",\n\nThank you for registering with us!");
		
		
		
	    List<UserDto> userDtoList = new ArrayList<>();
	    userDtoList.add(registeredNewUser);
	    ApiResponse<UserDto> response = new ApiResponse<UserDto>("success", userDtoList);
	    return new ResponseEntity<>(response, HttpStatus.OK);
	}
}










