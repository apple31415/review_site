package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import com.launchacademy.reviews.models.Word;
import com.launchacademy.reviews.repositories.LanguageRepository;
import com.launchacademy.reviews.repositories.ReviewRepository;
import com.launchacademy.reviews.repositories.UserRepository;
import com.launchacademy.reviews.repositories.WordRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/words")
public class WordsAPIController {
  private final WordRepository wordRepository;
  private final LanguageRepository languageRepository;
  private final ReviewRepository reviewRepository;
  private final UserRepository userRepository;

  @Autowired
  public WordsAPIController(WordRepository wordRepository, LanguageRepository languageRepository,
      ReviewRepository reviewRepository,
      UserRepository userRepository){
    this.wordRepository = wordRepository;
    this.languageRepository = languageRepository;
    this.reviewRepository = reviewRepository;
    this.userRepository = userRepository;
  }

  @GetMapping
  public Iterable<Word> getAll(){
    return wordRepository.findAll();
  }

  @GetMapping("/{id}")
  public Word getById(@PathVariable Integer id){
    return wordRepository.findById(id).get();
  }

  @GetMapping("/{id}/reviews")
  public List<Review> getAllReviewsById(@PathVariable Integer id) {return wordRepository.findById(id).get().getReviews(); }

  @PostMapping("/{id}/reviews")
  public Review newReview(@RequestBody ReviewForm review, @PathVariable Integer id) {
    Review newReview = new Review();
    newReview.setRating(review.getRating());
    newReview.setUser(userRepository.findById(review.getUserId()).get());
    newReview.setComment(review.getComment());
    newReview.setWord(wordRepository.findById(id).get());
    return reviewRepository.save(newReview);
  }
}
