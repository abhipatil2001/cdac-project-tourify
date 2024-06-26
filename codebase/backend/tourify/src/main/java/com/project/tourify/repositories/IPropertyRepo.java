package com.project.tourify.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Property;

public interface IPropertyRepo extends JpaRepository<Property, Long> {

}
