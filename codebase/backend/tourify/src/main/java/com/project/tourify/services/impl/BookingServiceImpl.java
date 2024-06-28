package com.project.tourify.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.BookingDto;
import com.project.tourify.dtos.BookingDto2;
import com.project.tourify.entities.Booking;
import com.project.tourify.entities.BookingStatus;
import com.project.tourify.entities.Property;
import com.project.tourify.entities.User;
import com.project.tourify.repositories.IBookingRepo;
import com.project.tourify.repositories.IBookingStatusRepo;
import com.project.tourify.repositories.IPropertyRepo;
import com.project.tourify.repositories.IUserRepo;
import com.project.tourify.services.IBookingService;

@Service
public class BookingServiceImpl implements IBookingService{

	@Autowired
	private IBookingRepo bookingRepo;
	
	@Autowired
	private IUserRepo userRepo;
	
	@Autowired
	private IPropertyRepo propertyRepo;
	
	@Autowired
	private IBookingStatusRepo bookingStatusRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	
	@Override
	public BookingDto2 bookProperty(BookingDto2 bookingDto2) {
		Booking booking = this.modelMapper.map(bookingDto2, Booking.class);
		Booking bookingSaved = this.bookingRepo.save(booking);
		return this.modelMapper.map(bookingSaved, BookingDto2.class);
	}

	 @Override
	    public List<BookingDto> getBookingsByUserId(Long userId) {
	        User user = new User();
	        user.setId(userId);
	        List<Booking> bookings = this.bookingRepo.findByUserId(user);
	        
	        List<BookingDto> bookingsDto = bookings.stream().map(booking -> {
	            BookingDto bookingDto = this.modelMapper.map(booking, BookingDto.class);

	            // Fetch and set additional details
	            Optional<User> userOptional = userRepo.findById(booking.getUserId());
	            Optional<Property> propertyOptional = propertyRepo.findById(booking.getPropertyId());
	            Optional<BookingStatus> statusOptional = bookingStatusRepo.findById(booking.getStatusId());


	            userOptional.ifPresent(u -> bookingDto.setName(u.getName()));
	            propertyOptional.ifPresent(p -> bookingDto.setTitle(p.getTitle()));
	            statusOptional.ifPresent(s -> bookingDto.setStatus(s.getStatus()));

	            return bookingDto;
	        }).collect(Collectors.toList());

	        return bookingsDto;
	    }

}














