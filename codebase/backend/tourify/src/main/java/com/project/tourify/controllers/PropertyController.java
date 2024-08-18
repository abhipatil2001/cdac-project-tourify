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

import com.project.tourify.dtos.PropertyDetailsDTO;
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
	
    
    // get all properties from particular city
    @GetMapping("/place/{id}")
    public ApiResponse<PropertyDto> getPropertiesByPlaceId(@PathVariable Long id) {
    	List<PropertyDto> propertiesByPlaceId = this.propertyService.getPropertiesByPlaceId(id);
    	ApiResponse<PropertyDto> response = new ApiResponse<>("success", propertiesByPlaceId);
    	return response;
    }
    
    // get the property details of particular property from the city
    @GetMapping("/propdetails/{placeId}/{propertyId}")
    public ApiResponse<PropertyDto> getPropDetailsBelongToCity(@PathVariable Long placeId, @PathVariable Long propertyId) {
    	List<PropertyDto> propsByPlaceIdAndPropId = this.propertyService.getPropsByPlaceIdAndPropId(placeId, propertyId);
    	ApiResponse<PropertyDto> response = new ApiResponse<>("success", propsByPlaceIdAndPropId);
    	return response;
    }
    
    
    // get all properties of owner from that city
    @GetMapping("/{uId}/{pId}")
    public ApiResponse<PropertyDto> getPropsByUserIdAndPlaceId(@PathVariable Long uId, @PathVariable Long pId) {
    	List<PropertyDto> propsByUserIdAndPlaceId = this.propertyService.getPropsByUserIdAndPlaceId(uId, pId);
    	ApiResponse<PropertyDto> response = new ApiResponse<>("success", propsByUserIdAndPlaceId);
    	return response;
    }
    
    // get all properties based on user Id
    @GetMapping("/owner/{id}")
    public ApiResponse<PropertyDetailsDTO> getPropsBasedOnUserId(@PathVariable(name = "id") Long userId) {
    	List<PropertyDetailsDTO> propsDto = this.propertyService.findPropertiesByUserId(userId);
    	 return new ApiResponse<>("success", propsDto);
    }
	
}
