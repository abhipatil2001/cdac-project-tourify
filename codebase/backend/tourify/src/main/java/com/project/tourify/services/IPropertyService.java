package com.project.tourify.services;

import java.util.List;

import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.entities.Property;

public interface IPropertyService{

	PropertyDto addProperty(PropertyDto propertyDto);
	
	List<PropertyDto> getAllProperties();

	List<PropertyDto> getPropertiesByUserId(Long userId);
	
	List<PropertyDto> getPropertiesByPlaceId(Long placeId);
}
