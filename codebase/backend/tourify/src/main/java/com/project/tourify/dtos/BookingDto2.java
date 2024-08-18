package com.project.tourify.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.project.tourify.entities.Booking;
import com.project.tourify.entities.BookingStatus;
import com.project.tourify.entities.Property;
import com.project.tourify.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Data
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class BookingDto2 {
	
	private Long id;

	private LocalDate fromDate;
	
	private LocalDate toDate;
	
	private double bill;
	
	private Long userId;
	
	private Long propertyId;
	
	private Long statusId;
	
}
