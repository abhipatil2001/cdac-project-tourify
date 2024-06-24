package com.project.tourify.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.UserDto;
import com.project.tourify.services.IUserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private IUserService iUserService;
	
	
	// ADD USER
	@PostMapping("/register")
	public ResponseEntity<UserDto> RegisterUser(@RequestBody UserDto userDto) {
		UserDto createdUser = this.iUserService.createUser(userDto);
		return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
	}	
}
