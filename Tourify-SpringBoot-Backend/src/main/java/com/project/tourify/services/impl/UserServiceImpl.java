package com.project.tourify.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.UserDto;
import com.project.tourify.dtos.UserLoginDto;
import com.project.tourify.entities.Role;
import com.project.tourify.entities.User;
import com.project.tourify.exceptions.ApiException;
import com.project.tourify.exceptions.ResourceNotFoundException;
import com.project.tourify.jpa.IRoleRepo;
import com.project.tourify.jpa.IUserRepo;
import com.project.tourify.services.IUserService;

import jakarta.persistence.NoResultException;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements IUserService{

	@Autowired
	private IUserRepo iUserRepo;
	
	@Autowired
	private IRoleRepo roleRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDto createUser(UserDto userDto) {
		  User user = this.modelMapper.map(userDto, User.class);
		  //added role to set object to the reference of role
		  Role role = roleRepo.findById(userDto.getRoleId()).orElseThrow(()-> new ResourceNotFoundException("Role", "id", userDto.getRoleId()));
		  user.setRole(role);
		  user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		  User savedUser = this.iUserRepo.save(user);
		  //to set role id back to the dto added externally 
		  UserDto savedUserDto = this.modelMapper.map(savedUser, UserDto.class);
		  //set RoleId explicitly
		  savedUserDto.setRoleId(savedUser.getRole().getId());
		  return savedUserDto;
	}

	@Override
	public UserDto updateUser(UserDto userDto, Long userId) {
		User user = this.iUserRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));
	    user.setName(userDto.getName());
	    user.setPhone(userDto.getPhone());
//	    user.setPassword(userDto.getPassword());
	    user.setPassword(this.passwordEncoder.encode(userDto.getPassword()));
	    user.setAddress(userDto.getAddress());
		User updatedUser = this.iUserRepo.save(user);
		return this.modelMapper.map(updatedUser, UserDto.class);
	}

	@Override
	public UserDto getUserById(Long userId) {
		User user = this.iUserRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));
		Long roleId = user.getRole().getId();
		Role role = this.roleRepo.findById(roleId).orElseThrow(()-> new ResourceNotFoundException("Role", "roleId", roleId));
//		System.out.println("Role using sysout: " + role);
//		log.info("Role using logger: "+ role);
		UserDto userDto = new UserDto();
		userDto.setId(user.getId());
		userDto.setName(user.getName());
		userDto.setEmail(user.getEmail());
		userDto.setPassword(user.getPassword());
		userDto.setAddress(user.getAddress());
		userDto.setPhone(user.getPhone());
		userDto.setRoleId(role.getId());
//		log.info("UserDto: " + userDto);
		return userDto;
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
	
	@Override
	public UserDto loginUser(UserLoginDto userLoginDto) {
		User loginUser = null;
	    try {
	    	//for the checking of encoded password only findbyemail
//	        loginUser = this.iUserRepo.findByEmailAndPassword(userLoginDto.getEmail(), userLoginDto.getPassword());
	    	loginUser = iUserRepo.findByEmail(userLoginDto.getEmail()).orElseThrow(()-> new ResourceNotFoundException("userEmail", userLoginDto.getEmail()));
	        if (loginUser == null) {
	        	System.out.println("user not found with email");
	            throw new ResourceNotFoundException("User", userLoginDto.getEmail());
	        }
	    } catch (NoResultException e) {
	    	System.out.println("exception thrown in loginuser");
	    	e.printStackTrace();
	        throw new ResourceNotFoundException("User", userLoginDto.getEmail());
	    }
	    
	    if(!this.passwordEncoder.matches(userLoginDto.getPassword(), loginUser.getPassword())) {
	    	System.out.println("incorrect credentials (password)");
	    	throw new ApiException("Incorrect Credentials(Password)");
	    }
	    return this.modelMapper.map(loginUser, UserDto.class);
	}

}
