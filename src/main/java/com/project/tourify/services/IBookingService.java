package com.project.tourify.services;

import java.util.List;

import com.project.tourify.dtos.BookingDto;
import com.project.tourify.dtos.BookingDto2;
import com.project.tourify.dtos.BookingsDetailsDto;

public interface IBookingService {

	BookingDto2 bookProperty(BookingDto2 bookingDto2);
	
	List<BookingDto> getBookingsByUserId(Long userId);
	
	List<BookingsDetailsDto> getBookingsOfOwnersProps(Long ownerId);
	
	
}
