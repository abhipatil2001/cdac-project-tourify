package com.project.tourify.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.BookingDto;
import com.project.tourify.entities.Booking;
import com.project.tourify.repositories.IBookingRepo;
import com.project.tourify.services.IBookingService;

@Service
public class BookingServiceImpl implements IBookingService{

	@Autowired
	IBookingRepo bookingRepo;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Override
	public BookingDto bookProperty(BookingDto bookingDto) {
		Booking booking = this.modelMapper.map(bookingDto, Booking.class);
		Booking bookingSaved = this.bookingRepo.save(booking);
		return this.modelMapper.map(bookingSaved, BookingDto.class);
	}

}
