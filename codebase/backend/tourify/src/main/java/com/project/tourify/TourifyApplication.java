package com.project.tourify;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TourifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(TourifyApplication.class, args);
		System.out.println("Spring Boot Started On Port No: 9999");
	}

	// bean declaration for ModelMapper
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
