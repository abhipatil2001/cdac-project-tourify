package com.project.tourify.services;

import java.util.List;

import com.project.tourify.dtos.PropertyDto;

public interface IPropertyService{

	PropertyDto addProperty(PropertyDto propertyDto);
	
	List<PropertyDto> getAllProperties();
}
