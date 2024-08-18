package com.project.tourify.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.tourify.entities.User;
import com.project.tourify.exceptions.ResourceNotFoundException;
import com.project.tourify.repositories.IUserRepo;

@Service
public class CustomUserDetailService implements UserDetailsService{

	@Autowired
	private IUserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = this.userRepo.findByEmail(username).orElseThrow(() -> new ResourceNotFoundException("User", username));
		return user;
	}

	
}
