package com.project.tourify.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.UserDto;
import com.project.tourify.entities.User;
import com.project.tourify.exceptions.ResourceNotFoundException;
import com.project.tourify.repositories.IUserRepo;
import com.project.tourify.services.IUserService;

@Service
public class UserServiceImpl implements IUserService{

	@Autowired
	private IUserRepo iUserRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public UserDto createUser(UserDto userDto) {
		  User user = this.modelMapper.map(userDto, User.class);
		  User savedUser = this.iUserRepo.save(user);
		return this.modelMapper.map(savedUser, UserDto.class);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Long userId) {
		User user = this.iUserRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));
		User updatedUser = this.iUserRepo.save(user);
		return this.modelMapper.map(updatedUser, UserDto.class);
	}

	@Override
	public UserDto getUserById(Long userId) {
		User user = this.iUserRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));
		return this.modelMapper.map(user, UserDto.class);
	}

	@Override
	public List<UserDto> getAllUsers() {
		List<User> users = this.iUserRepo.findAll();
		List<UserDto> userDtos = users.stream().map(user -> this.modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
		return userDtos;
	}

	@Override
	public void deleteUser(Long userId) {
		User user = this.iUserRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));
		this.iUserRepo.delete(user);
	}

}
