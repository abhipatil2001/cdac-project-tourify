package com.project.tourify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TourifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(TourifyApplication.class, args);
		System.out.println("Spring Boot Started On Port No: 9999");
	}

}
