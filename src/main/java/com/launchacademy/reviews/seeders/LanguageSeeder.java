package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.Language;
import com.launchacademy.reviews.repositories.LanguageRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LanguageSeeder {

  private LanguageRepository languageRepo;

  @Autowired
  public LanguageSeeder(LanguageRepository languageRepo) {
    this.languageRepo = languageRepo;
  }

  public void seed() {
    List<Language> languagesToAdd = new ArrayList<>();
    Language english = new Language();
    english.setLanguage("English");
    languagesToAdd.add(english);
    Language french = new Language();
    french.setLanguage("French");
    languagesToAdd.add(french);
    Language german = new Language();
    german.setLanguage("German");
    languagesToAdd.add(german);
    Language quechua = new Language();
    quechua.setLanguage("Quechua");
    languagesToAdd.add(quechua);
    Language powhatan = new Language();
    powhatan.setLanguage("Powhatan");
    languagesToAdd.add(powhatan);
    Language tagalog = new Language();
    tagalog.setLanguage("Tagalog");
    languagesToAdd.add(tagalog);
    Language swahili = new Language();
    swahili.setLanguage("Swahili");
    languagesToAdd.add(swahili);
    Language korean = new Language();
    korean.setLanguage("Korean");
    languagesToAdd.add(korean);

    if (!languageRepo.findAll().iterator().hasNext()) {
      languageRepo.saveAll(languagesToAdd);
    }
  }

}
