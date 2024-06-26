package com.project.tourify.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.services.IPropertyService;

@RestController
@RequestMapping("/api/user")
public class PropertyController {

	@Autowired
	private IPropertyService propertyService;
	
	@PostMapping("/property/add")
	public ResponseEntity<PropertyDto> addProperty(@RequestBody PropertyDto propertyDto){
		PropertyDto addedProperty = this.propertyService.addProperty(propertyDto);
		return new ResponseEntity<PropertyDto>(addedProperty, HttpStatus.CREATED);
	}
}
