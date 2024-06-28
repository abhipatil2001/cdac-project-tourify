package com.project.tourify.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.tourify.dtos.PropertyDetailsDTO;
import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.entities.Place;
import com.project.tourify.entities.Property;
import com.project.tourify.entities.User;

@Repository
public interface IPropertyRepo extends JpaRepository<Property, Long> {

    // Custom finder method to get properties by userId
    List<Property> findByUserId(User user);
    
    List<Property> findByPlaceId(Place place);
    
    List<Property> findByUserIdAndPlaceId(User user, Place place);
    
    // JPQL / HQL
    
    @Query("SELECT new com.project.tourify.dtos.PropertyDetailsDTO(prop.id, prop.title, prop.address, prop.rate, prop.description, prop.img, p.place, c.category) " +
           "FROM Property prop " +
           "JOIN prop.placeId p " +
           "JOIN prop.categoryId c " +
           "WHERE prop.userId.id = :userId")
    List<PropertyDetailsDTO> findPropertiesByUserId(@Param("userId") Long userId);
}
