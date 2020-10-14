package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Word;
import com.launchacademy.reviews.repositories.LanguageRepository;
import com.launchacademy.reviews.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/words")
public class WordsAPIController {
  private final WordRepository wordRepository;
  private final LanguageRepository languageRepository;

  @Autowired
  public WordsAPIController(WordRepository wordRepository, LanguageRepository languageRepository){
    this.wordRepository = wordRepository;
    this.languageRepository = languageRepository;
  }

  @GetMapping
  public Iterable<Word> getAll(){
    return wordRepository.findAll();
  }

  @GetMapping("/{id}")
  public Word getById(@PathVariable Integer id){
    return wordRepository.findById(id).get();
  }
}
