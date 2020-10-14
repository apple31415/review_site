package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Language;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends CrudRepository<Language, Integer> {
  public Language findByLanguage(String language);
}
