package com.project.tourify.services;

import java.util.List;

import com.project.tourify.dtos.BookingDto;
import com.project.tourify.dtos.BookingDto2;

public interface IBookingService {

	BookingDto2 bookProperty(BookingDto2 bookingDto2);
	
	List<BookingDto> getBookingsByUserId(Long userId);
}
