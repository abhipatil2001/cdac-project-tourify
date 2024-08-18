package com.project.tourify.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Role;

public interface IRoleRepo extends JpaRepository<Role, Long> {

}
