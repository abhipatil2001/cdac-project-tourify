package com.project.tourify.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.BookingDto;
import com.project.tourify.services.IBookingService;

@RestController
@RequestMapping("/api/user/")
public class BookingController {

	@Autowired
	IBookingService bookingService;
	
	@PostMapping("/property/book")
	public ResponseEntity<BookingDto> bookProp(@RequestBody BookingDto bookingDto){
		BookingDto bookedProperty = this.bookingService.bookProperty(bookingDto);
		return new ResponseEntity<BookingDto>(bookedProperty, HttpStatus.CREATED);
		
	}
}
