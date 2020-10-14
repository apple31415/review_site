package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Language;
import com.launchacademy.reviews.models.Word;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/words")
public class WordsAPIController {
  private final WordRepository wordRepository;

  @Autowired
  public WordsAPIController(WordRepository wordRepository){
    this.wordRepository = wordRepository;
  }

  @GetMapping
  public List<Word> getAllByLanguage(Language language){
    return wordRepository.getAllByLanguage(language);
  }
}
