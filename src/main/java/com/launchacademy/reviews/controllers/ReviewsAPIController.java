package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewsAPIController {
  private final ReviewRepository reviewRepository;

  @Autowired
  public ReviewsAPIController(ReviewRepository reviewRepository){
    this.reviewRepository = reviewRepository;
  }

  @GetMapping
  public Iterable<Review> getAllReviews(){
    return reviewRepository.findAll();
  }
}
