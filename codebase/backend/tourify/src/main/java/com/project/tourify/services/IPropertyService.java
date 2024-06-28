package com.project.tourify.services;

import java.util.List;

import com.project.tourify.dtos.PropertyDetailsDTO;
import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.entities.Property;

public interface IPropertyService{

	PropertyDto addProperty(PropertyDto propertyDto);
	
	List<PropertyDto> getAllProperties();
	
	List<PropertyDto> getPropertiesByPlaceId(Long placeId);
	
	List<PropertyDto> getPropsByUserIdAndPlaceId(Long userId, Long placeId);
	
	List<PropertyDetailsDTO> findPropertiesByUserId(Long userId);
}
