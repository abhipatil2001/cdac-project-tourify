package com.project.tourify;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j
public class TourifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(TourifyApplication.class, args);
		log.info("slf4j logger: Spring Boot Started On Port No: 9999");
		System.out.println("sysout: Spring Boot Started On Port No: 9999");
	}

	// bean declaration for ModelMapper
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
