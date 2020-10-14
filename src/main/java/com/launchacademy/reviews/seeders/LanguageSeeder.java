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
    english.setName("English");
    languagesToAdd.add(english);
    Language french = new Language();
    french.setName("French");
    languagesToAdd.add(french);
    Language german = new Language();
    german.setName("German");
    languagesToAdd.add(german);
    Language quechua = new Language();
    quechua.setName("Quechua");
    languagesToAdd.add(quechua);
    Language powhatan = new Language();
    powhatan.setName("Powhatan");
    languagesToAdd.add(powhatan);
    Language tagalog = new Language();
    tagalog.setName("Tagalog");
    languagesToAdd.add(tagalog);
    Language swahili = new Language();
    swahili.setName("Swahili");
    languagesToAdd.add(swahili);
    Language korean = new Language();
    korean.setName("Korean");
    languagesToAdd.add(korean);

    if (!languageRepo.findAll().iterator().hasNext()) {
      languageRepo.saveAll(languagesToAdd);
    }
  }

}
