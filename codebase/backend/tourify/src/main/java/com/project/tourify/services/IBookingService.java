package com.project.tourify.services;

import java.util.List;

import com.project.tourify.dtos.BookingDto;

public interface IBookingService {

	BookingDto bookProperty(BookingDto bookingDto);
	
	List<BookingDto> getBookingsByUserId(Long userId);
}
