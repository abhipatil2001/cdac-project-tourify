package com.project.tourify.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class PropertyDto {
	
	private Long id;
	
	private String title;
	
	private String address;
	
	private double rate;
	
	private String description;
	
	private String img;
	
	private Long placeId;
	
	private Long categoryId;
	
	private Long userId;
}
