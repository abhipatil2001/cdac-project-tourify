package com.project.tourify;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TourifyApplicationTests {

	@Test
	@Disabled
	void contextLoads() {
		System.out.println("contextLoads() of " + getClass());
	}
	
	@Test
//	@Disabled
	@DisplayName("myMethodName")
	void myMethod() {
		System.out.println("myMethod() of " + getClass());
	}


	@AfterEach
	void tearDown() {
		System.out.println("tearDown()");
	}
	
	@BeforeEach
	void setUp() {
		System.out.println("setUp()");
	}
}
