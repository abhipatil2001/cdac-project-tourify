package com.project.tourify.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.UserDto;
import com.project.tourify.dtos.UserLoginDto;
import com.project.tourify.response.ApiResponse;
import com.project.tourify.services.IUserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private IUserService userService;
	
	// Login User
	@PostMapping("/login")
	public ResponseEntity<ApiResponse<UserDto>> loginUser(@RequestBody UserLoginDto userLoginDto) {
		UserDto loginUser = this.userService.loginUser(userLoginDto);
		List<UserDto> userDtoList = new ArrayList<>();
	    userDtoList.add(loginUser);
	    ApiResponse<UserDto> response = new ApiResponse<UserDto>("success", userDtoList);
	    return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	// ADD USER
	@PostMapping("/register")
	public ResponseEntity<ApiResponse<UserDto>> registerUser(@RequestBody UserDto userDto) {
		UserDto registeredUser = this.userService.createUser(userDto);
	    List<UserDto> userDtoList = new ArrayList<>();
	    userDtoList.add(registeredUser);
	    ApiResponse<UserDto> response = new ApiResponse<UserDto>("success", userDtoList);
	    return new ResponseEntity<>(response, HttpStatus.OK);
	}	
	
	// GET Single USER	
	@GetMapping("/get/{id}")
	public ResponseEntity<ApiResponse<UserDto>> getUser(@PathVariable(name = "id") Long id) {
	    UserDto foundUser = this.userService.getUserById(id);
	    List<UserDto> userDtoList = new ArrayList<>();
	    userDtoList.add(foundUser);
	    ApiResponse<UserDto> response = new ApiResponse<UserDto>("success", userDtoList);
	    return new ResponseEntity<>(response, HttpStatus.OK);
	}

	
	// GET All USERS
	@GetMapping("/get/all")
	public ApiResponse<UserDto> getAllUsers() {
		List<UserDto> allUsers = this.userService.getAllUsers();
		ApiResponse<UserDto> response = new ApiResponse<UserDto>("success", allUsers);
		return response;
	}
	
	// DELETE USER
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable Long id){
		this.userService.deleteUser(id);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	// UPDATE USER
	@PutMapping("/update/{id}")
	public ApiResponse<UserDto> updateUser(@PathVariable Long id, @RequestBody UserDto userDto) {
		UserDto updateUser = this.userService.updateUser(userDto, id);
		List<UserDto> userDtos = new ArrayList<>();
		userDtos.add(updateUser);
		ApiResponse<UserDto> response = new ApiResponse<UserDto>("success", userDtos);
		return response;
	}
	
	
}


















