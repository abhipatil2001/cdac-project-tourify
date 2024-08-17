package com.project.tourify.response;

import java.util.List;

import com.project.tourify.dtos.UserDto;

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
public class ApiResponse<T> {

	private String status;
	
	private List<T> data;
}
