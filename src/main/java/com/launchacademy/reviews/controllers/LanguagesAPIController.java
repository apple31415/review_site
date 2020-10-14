package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Language;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/languages")
public class LanguagesAPIController {
  private final LanguageRepository languageRepository;

  @Autowired
  public LanguagesAPIController(LanguageRepository languageRepository){
    this.languageRepository = languageRepository;
  }

  @GetMapping
  public List<Language> getAllLanguages(String language){
    return LanguageRepository.findByLanguage(language);
  }
}
