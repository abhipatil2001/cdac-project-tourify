package com.project.tourify.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<UserDto> registerUser(@RequestBody UserDto userDto) {
		UserDto createdUser = this.iUserService.createUser(userDto);
		return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
	}	
	
	// GET Single USER
	@GetMapping("/get/{id}")
	public ResponseEntity<UserDto> getUser(@PathVariable (name = "id") Long id){
		UserDto foundUser = this.iUserService.getUserById(id);
		return new ResponseEntity<>(foundUser, HttpStatus.OK);
	}
	
	// GET All USERS
	@GetMapping("/get/all")
	public List<UserDto> getAllUsers() {
		List<UserDto> allUsers = this.iUserService.getAllUsers();
		return allUsers;
	}
	
	// DELETE USER
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable Long id){
		this.iUserService.deleteUser(id);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	// UPDATE USER
	@PutMapping("/update/{id}")
	public ResponseEntity<UserDto> updateUser(@PathVariable Long id, @RequestBody UserDto userDto) {
		UserDto updateUser = this.iUserService.updateUser(userDto, id);
		return new ResponseEntity<UserDto>(updateUser, HttpStatus.OK);
	}
	
	
}


















