package com.project.tourify.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tourify.dtos.ReviewDto;
import com.project.tourify.response.ApiResponse;
import com.project.tourify.services.IReviewService;

@RestController
@RequestMapping("/api/user")
public class ReviewController {

	@Autowired
	private IReviewService reviewService;
	
	
	@PostMapping("/property/review")
	public ApiResponse<ReviewDto> giveReview(@RequestBody ReviewDto reviewDto){
		ReviewDto reviewsDto = this.reviewService.giveReview(reviewDto);
		List<ReviewDto> reviewListDto = new ArrayList<>();
		reviewListDto.add(reviewsDto);
		ApiResponse<ReviewDto> response = new ApiResponse<>("success", reviewListDto);
		return response;
	}
}
