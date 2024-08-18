package com.project.tourify.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiException extends RuntimeException{
	
	public ApiException(String msg) {
		super(msg);
	}
	
	public ApiException() {
		super();
	}
}