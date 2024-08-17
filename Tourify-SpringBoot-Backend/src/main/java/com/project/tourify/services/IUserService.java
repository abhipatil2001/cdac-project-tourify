package com.project.tourify.services;

import java.util.List;

import com.project.tourify.dtos.UserDto;
import com.project.tourify.dtos.UserLoginDto;

public interface IUserService {

	UserDto createUser(UserDto userDto);
	
	UserDto updateUser(UserDto userDto, Long userId);
	
	UserDto getUserById(Long userId);
	
	List<UserDto> getAllUsers();
	
	void deleteUser(Long userId);
	
	UserDto loginUser(UserLoginDto userLoginDto);
}
