package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import com.launchacademy.reviews.models.Word;
import com.launchacademy.reviews.models.WordForm;
import com.launchacademy.reviews.repositories.LanguageRepository;
import com.launchacademy.reviews.repositories.ReviewRepository;
import com.launchacademy.reviews.repositories.UserRepository;
import com.launchacademy.reviews.repositories.WordRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

  @PostMapping
  public Word createNewWord(@RequestBody WordForm wordForm) {
    Word newWord = new Word();
    newWord.setName(wordForm.getName());
    newWord.setDefinition(wordForm.getDefinition());
    newWord.setLanguage(languageRepository.findByName(wordForm.getLanguageName()));
    return wordRepository.save(newWord);
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

  @PutMapping
  public Word editWord(@RequestBody WordForm wordForm) {
    Word word = wordRepository.findById(wordForm.getWordId()).get();
    word.setName(wordForm.getName());
    word.setDefinition(wordForm.getDefinition());
    word.setLanguage(languageRepository.findByName(wordForm.getLanguageName()));
    return wordRepository.save(word);
  }

  @PutMapping("/{id}/reviews")
  public Review editReview(@RequestBody ReviewForm review, @PathVariable Integer id) {
    Review editReview = reviewRepository.findById(review.getReviewId()).get();
    editReview.setRating(review.getRating());
    editReview.setUser(userRepository.findById(review.getUserId()).get());
    editReview.setComment(review.getComment());
    editReview.setWord(wordRepository.findById(id).get());
    return reviewRepository.save(editReview);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity deleteWord(@PathVariable Integer id){
    wordRepository.deleteById(id);
    return new ResponseEntity(HttpStatus.OK);
  }
}
