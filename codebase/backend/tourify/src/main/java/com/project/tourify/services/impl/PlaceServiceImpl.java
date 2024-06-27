package com.project.tourify.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.PlaceDto;
import com.project.tourify.entities.Place;
import com.project.tourify.repositories.IPlaceRepo;
import com.project.tourify.services.IPlaceService;

@Service
public class PlaceServiceImpl implements IPlaceService{

	@Autowired
	private IPlaceRepo placeRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<PlaceDto> getAllCities() {
		List<Place> allPlaces = this.placeRepo.findAll();
		
		List<PlaceDto> allPlacesDto = allPlaces.stream().map(place -> modelMapper.map(place, PlaceDto.class)).collect(Collectors.toList());
		
		return allPlacesDto;
	}

}
