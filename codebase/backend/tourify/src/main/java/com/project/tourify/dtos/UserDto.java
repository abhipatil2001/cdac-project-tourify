package com.project.tourify.dtos;



import com.project.tourify.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	private Long id;
	private String name;
	private String email;
	private String password;
	private String address;
	
	private Role roleId;
}
