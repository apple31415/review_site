package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewRepository;
import com.launchacademy.reviews.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewsAPIController {

  private final ReviewRepository reviewRepository;
  private final WordRepository wordRepository;

  @Autowired
  public ReviewsAPIController(ReviewRepository reviewRepository,
      WordRepository wordRepository) {
    this.reviewRepository = reviewRepository;
    this.wordRepository = wordRepository;
  }
  @GetMapping
  public Iterable<Review> getAll(){
    return reviewRepository.findAll();
  }

  @DeleteMapping("/{id}")
  public ResponseEntity deleteReview(@PathVariable Integer id){
    reviewRepository.deleteById(id);
    return new ResponseEntity(HttpStatus.OK);
  }
}