package com.project.tourify.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.User;

public interface IUserRepo extends JpaRepository<User, Long> {

}
