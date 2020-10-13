package com.launchacademy.reviews.seeders;


import com.launchacademy.reviews.models.Language;
import com.launchacademy.reviews.models.Word;
import com.launchacademy.reviews.repositories.LanguageRepository;
import com.launchacademy.reviews.repositories.WordRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class WordSeeder {

  private WordRepository wordRepo;
  private LanguageRepository languageRepo;

  @Autowired
  public WordSeeder(WordRepository wordRepo,
      LanguageRepository languageRepo) {
    this.wordRepo = wordRepo;
    this.languageRepo = languageRepo;
  }

  public void seed() {
    Language english = languageRepo.findByLanguage("English");
    Language french = languageRepo.findByLanguage("French");
    Language german = languageRepo.findByLanguage("German");
    Language quechua = languageRepo.findByLanguage("Quechua");
    Language powhatan = languageRepo.findByLanguage("Powhatan");
    Language tagalog = languageRepo.findByLanguage("Tagalog");
    Language swahili = languageRepo.findByLanguage("Swahili");
    Language korean = languageRepo.findByLanguage("Korean");

    List<Word> wordsToAdd = new ArrayList<>();
    Word raccoon = new Word();
    raccoon.setWord("raccoon");
    raccoon.setLanguage(powhatan);
    wordsToAdd.add(raccoon);
    Word tutaonana = new Word();
    tutaonana.setWord("tutaonana");
    tutaonana.setLanguage(swahili);
    wordsToAdd.add(tutaonana);
    Word fernweh = new Word();
    fernweh.setWord("fernweh");
    fernweh.setLanguage(german);
    wordsToAdd.add(fernweh);
    Word jerky = new Word();
    jerky.setWord("jerky");
    jerky.setLanguage(quechua);
    wordsToAdd.add(jerky);
    Word amphisbaena = new Word();
    amphisbaena.setWord("amphisbaena");
    amphisbaena.setLanguage(english);
    wordsToAdd.add(amphisbaena);
    Word argleBargle = new Word();
    argleBargle.setWord("argle-bargle");
    argleBargle.setLanguage(english);
    wordsToAdd.add(argleBargle);
    Word chocolat = new Word();
    chocolat.setWord("chocolat");
    chocolat.setLanguage(french);
    wordsToAdd.add(chocolat);
    Word sundubu = new Word();
    sundubu.setWord("sundubu");
    sundubu.setLanguage(korean);
    wordsToAdd.add(sundubu);
    Word mabuhay = new Word();
    mabuhay.setWord("mabuhay");
    mabuhay.setLanguage(tagalog);
    wordsToAdd.add(mabuhay);

    if (!wordRepo.findAll().iterator().hasNext()) {
      wordRepo.saveAll(wordsToAdd);
    }
  }
}
