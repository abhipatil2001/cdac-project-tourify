package com.project.tourify.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.tourify.entities.Review;

public interface IReviewRepo extends JpaRepository<Review, Long> {

}
