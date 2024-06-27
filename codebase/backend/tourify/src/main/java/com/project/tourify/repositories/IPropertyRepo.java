package com.project.tourify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.entities.Property;
import com.project.tourify.entities.User;

@Repository
public interface IPropertyRepo extends JpaRepository<Property, Long> {

    // Custom finder method to get properties by userId
    List<Property> findByUserId(User user);
}
