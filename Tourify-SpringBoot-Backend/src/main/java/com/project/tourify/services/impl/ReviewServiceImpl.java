package com.project.tourify.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.tourify.dtos.ReviewDto;
import com.project.tourify.entities.Review;
import com.project.tourify.jpa.IReviewRepo;
import com.project.tourify.services.IReviewService;

@Service
public class ReviewServiceImpl implements IReviewService{

	@Autowired
	private IReviewRepo reviewRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ReviewDto giveReview(ReviewDto reviewDto) {
		Review review = this.modelMapper.map(reviewDto, Review.class);
		Review savedReview = this.reviewRepo.save(review);
		return this.modelMapper.map(savedReview, ReviewDto.class);
	}

}
