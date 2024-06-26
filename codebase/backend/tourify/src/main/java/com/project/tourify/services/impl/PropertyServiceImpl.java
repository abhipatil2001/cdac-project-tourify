package com.project.tourify.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.entities.Property;
import com.project.tourify.repositories.IPropertyRepo;
import com.project.tourify.services.IPropertyService;

@Service
public class PropertyServiceImpl implements IPropertyService{

	@Autowired
	private IPropertyRepo propertyRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public PropertyDto addProperty(PropertyDto propertyDto) {
		Property property = this.modelMapper.map(propertyDto, Property.class);
		Property savedProperty = propertyRepo.save(property);
		return this.modelMapper.map(savedProperty, PropertyDto.class);
	}

	@Override
	public List<PropertyDto> getAllProperties() {
		List<Property> allProps = this.propertyRepo.findAll();
		List<PropertyDto> allPropsDto = allProps.stream().map(property -> this.modelMapper.map(property, PropertyDto.class)).collect(Collectors.toList());
		return allPropsDto;
	}

}
