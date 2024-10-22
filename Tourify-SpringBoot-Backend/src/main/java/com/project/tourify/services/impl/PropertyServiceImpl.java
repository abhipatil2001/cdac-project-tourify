package com.project.tourify.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.CategoryDetailsDto;
import com.project.tourify.dtos.PropertyDetailsDTO;
import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.entities.Category;
import com.project.tourify.entities.Place;
import com.project.tourify.entities.Property;
import com.project.tourify.entities.User;
import com.project.tourify.jpa.ICategory;
import com.project.tourify.jpa.IPlaceRepo;
import com.project.tourify.jpa.IPropertyRepo;
import com.project.tourify.services.IPropertyService;

@Service
public class PropertyServiceImpl implements IPropertyService{

	@Autowired
	private IPropertyRepo propertyRepo;
	
	@Autowired
	private IPlaceRepo placeRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private ICategory categoryrepo;
	
	@Override
	public PropertyDto addProperty(PropertyDto propertyDto) {
		System.out.println("propertyDto" + propertyDto);
		Property property = this.modelMapper.map(propertyDto, Property.class);
		Property savedProperty = propertyRepo.save(property);
		System.out.println("savedProperty"  + savedProperty);
		return this.modelMapper.map(savedProperty, PropertyDto.class);
	}

	@Override
	public List<PropertyDto> getAllProperties() {
		List<Property> allProps = this.propertyRepo.findAll();
		List<PropertyDto> allPropsDto = allProps.stream().map(property -> this.modelMapper.map(property, PropertyDto.class)).collect(Collectors.toList());
		return allPropsDto;
	}


	@Override
	public List<PropertyDto> getPropertiesByPlaceId(Long placeId) {
		Place place = new Place();
		place.setId(placeId);
		List<Property> propsByPlaceId = this.propertyRepo.findByPlaceId(place);
		List<PropertyDto> propsDto = propsByPlaceId.stream().map(prop-> this.modelMapper.map(prop, PropertyDto.class)).collect(Collectors.toList());
		
		return propsDto;
	}

	@Override
	public List<PropertyDto> getPropsByUserIdAndPlaceId(Long userId, Long placeId) {
		User user = new User();
		user.setId(userId);
		
		Place place = new Place();
		place.setId(placeId);
		
		List<Property> findByUserIdAndPlaceId = this.propertyRepo.findByUserIdAndPlaceId(user, place);
		List<PropertyDto>  findByUserIdAndPlaceIdDto = findByUserIdAndPlaceId.stream().map(prop -> modelMapper.map(prop, PropertyDto.class)).collect(Collectors.toList());
		return findByUserIdAndPlaceIdDto;
	}

	@Override
	public List<PropertyDetailsDTO> findPropertiesByUserId(Long userId) {
		List<PropertyDetailsDTO> propsBasedOnUserId = this.propertyRepo.findPropertiesByUserId(userId);
		return propsBasedOnUserId;
	}

	@Override
	public List<CategoryDetailsDto> getAllCategory() {
		List<Category> allcategories = categoryrepo.findAll();
		List<CategoryDetailsDto> allCategoryDtos = allcategories.stream().map(prop -> modelMapper.map(prop, CategoryDetailsDto.class)).collect(Collectors.toList());
		return allCategoryDtos;
	}
	
	
    

}
