package com.project.tourify.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.PropertyDto;
import com.project.tourify.entities.Property;
import com.project.tourify.services.IPropertyService;

@RestController
@RequestMapping("/api/property")
public class PropertyController {

	@Autowired
	private IPropertyService propertyService;
	
	@PostMapping("/add")
	public ResponseEntity<PropertyDto> addProperty(@RequestBody PropertyDto propertyDto){
		PropertyDto addedProperty = this.propertyService.addProperty(propertyDto);
		return new ResponseEntity<PropertyDto>(addedProperty, HttpStatus.CREATED);
	}
	
	@GetMapping("/get/all")
	public List<PropertyDto> getMyAllProps() {
		List<PropertyDto> allProperties = this.propertyService.getAllProperties();
		return allProperties;
	}
	
	// get all properties of owner
    @GetMapping("/owner/{id}")
    public List<PropertyDto> getPropertiesByUserId(@PathVariable Long id) {
        List<PropertyDto> propertiesByUserId = this.propertyService.getPropertiesByUserId(id);
        return propertiesByUserId;
    }
	
}
