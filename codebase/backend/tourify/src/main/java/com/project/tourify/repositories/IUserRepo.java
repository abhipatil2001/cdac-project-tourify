package com.project.tourify.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.User;

public interface IUserRepo extends JpaRepository<User, Long> {

	User findByEmailAndPassword(String email, String password);
	
	Optional<User> findByEmail(String email);
}
