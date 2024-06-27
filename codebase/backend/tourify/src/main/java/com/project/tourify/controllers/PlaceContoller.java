package com.project.tourify.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.PlaceDto;
import com.project.tourify.services.IPlaceService;

@RestController
@RequestMapping("/api/place")
public class PlaceContoller {

	@Autowired
	private IPlaceService placeService;
	
	@GetMapping("/all")
	public List<PlaceDto> getAllPlaces(){
		return this.placeService.getAllCities();
	}
}
