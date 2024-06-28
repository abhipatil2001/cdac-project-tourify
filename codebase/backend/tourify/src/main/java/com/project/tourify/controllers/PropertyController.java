package com.project.tourify.controllers;

import java.util.ArrayList;
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
import com.project.tourify.response.ApiResponse;
import com.project.tourify.services.IPropertyService;

@RestController
@RequestMapping("/api/property")
public class PropertyController {

	@Autowired
	private IPropertyService propertyService;
	
	@PostMapping("/add")
	public ApiResponse<PropertyDto> addProperty(@RequestBody PropertyDto propertyDto){
		PropertyDto addedProperty = this.propertyService.addProperty(propertyDto);
		List<PropertyDto> propDtoList = new ArrayList<>();
		propDtoList.add(addedProperty);
		
		ApiResponse<PropertyDto> response = new ApiResponse<>("success", propDtoList);
		return response;
	}
	
	@GetMapping("/get/all")
	public ApiResponse<PropertyDto> getMyAllProps() {
		List<PropertyDto> allProperties = this.propertyService.getAllProperties();
		ApiResponse<PropertyDto> response = new ApiResponse<>("success", allProperties);
		return response;
	}
	
	// get all properties of owner
    @GetMapping("/owner/{id}")
    public ApiResponse<PropertyDto> getPropertiesByUserId(@PathVariable Long id) {
        List<PropertyDto> propertiesByUserId = this.propertyService.getPropertiesByUserId(id);
        ApiResponse<PropertyDto> response = new ApiResponse<>("success", propertiesByUserId);
        return response;
    }
    
    // get all properties from particular city
    @GetMapping("/place/{id}")
    public ApiResponse<PropertyDto> getPropertiesByPlaceId(@PathVariable Long id) {
    	List<PropertyDto> propertiesByPlaceId = this.propertyService.getPropertiesByPlaceId(id);
    	ApiResponse<PropertyDto> response = new ApiResponse<>("success", propertiesByPlaceId);
    	return response;
    }
	
}
