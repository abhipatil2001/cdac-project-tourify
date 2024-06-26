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
public class UserDto {
	
	private Long id;
	
	private String name;
	
	private String email;
	
	private String phone;
	
	private String password;
	
	private String address;
	
	private int roleId;
}
