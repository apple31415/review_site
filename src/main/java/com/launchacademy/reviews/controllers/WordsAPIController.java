package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.Word;
import com.launchacademy.reviews.repositories.LanguageRepository;
import com.launchacademy.reviews.repositories.ReviewRepository;
import com.launchacademy.reviews.repositories.WordRepository;
import java.util.Optional;
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

  @Autowired
  public WordsAPIController(WordRepository wordRepository, LanguageRepository languageRepository,
      ReviewRepository reviewRepository){
    this.wordRepository = wordRepository;
    this.languageRepository = languageRepository;
    this.reviewRepository = reviewRepository;
  }

  @GetMapping
  public Iterable<Word> getAll(){
    return wordRepository.findAll();
  }

  @GetMapping("/{id}")
  public Word getById(@PathVariable Integer id){
    return wordRepository.findById(id).get();
  }

  @PostMapping("/{id}")
  public Review newReview(@RequestBody Review review, @PathVariable Integer id) {
    Optional<Word> word = wordRepository.findById(id);
    review.setWord(word.get());
    return reviewRepository.save(review);
  }
}
