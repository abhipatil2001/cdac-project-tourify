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
	
	@GetMapping("/mybookings/{id}")
	public List<BookingDto> customerBookings(@PathVariable Long id){
		List<BookingDto> bookingsByUserId = this.bookingService.getBookingsByUserId(id);
		return bookingsByUserId;
	}
}
