package com.project.tourify.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.ReviewDto;
import com.project.tourify.repositories.IReviewRepo;
import com.project.tourify.services.IReviewService;

@RestController
@RequestMapping("/api/user")
public class ReviewController {

	@Autowired
	private IReviewService reviewService;
	
	
	@PostMapping("/property/review")
	public ResponseEntity<ReviewDto> giveReview(@RequestBody ReviewDto reviewDto){
		ReviewDto giveReview = this.reviewService.giveReview(reviewDto);
		
		return new ResponseEntity<ReviewDto>(giveReview, HttpStatus.OK);
	}
}
