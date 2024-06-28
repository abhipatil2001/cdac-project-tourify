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

import com.project.tourify.dtos.BookingDto;
import com.project.tourify.dtos.BookingDto2;
import com.project.tourify.response.ApiResponse;
import com.project.tourify.services.IBookingService;

@RestController
@RequestMapping("/api/user/")
public class BookingController {

	@Autowired
	IBookingService bookingService;
	
	@PostMapping("/property/book")
	public ApiResponse<BookingDto2> bookProp(@RequestBody BookingDto2 bookingDto2){
		BookingDto2 bookedProperty = this.bookingService.bookProperty(bookingDto2);
		List<BookingDto2> bookingDtos = new ArrayList<>();
		bookingDtos.add(bookedProperty);
		ApiResponse<BookingDto2> response = new ApiResponse<>("success", bookingDtos);
		return response;
	}
	
	@GetMapping("/mybookings/{id}")
	public ApiResponse<BookingDto> customerBookings(@PathVariable Long id){
		List<BookingDto> bookingsByUserId = this.bookingService.getBookingsByUserId(id);
		ApiResponse<BookingDto> response = new ApiResponse<>("success", bookingsByUserId);
		return response;
	}
}
