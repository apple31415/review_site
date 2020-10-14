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
    Language english = languageRepo.findByName("English");
    Language french = languageRepo.findByName("French");
    Language german = languageRepo.findByName("German");
    Language quechua = languageRepo.findByName("Quechua");
    Language powhatan = languageRepo.findByName("Powhatan");
    Language tagalog = languageRepo.findByName("Tagalog");
    Language swahili = languageRepo.findByName("Swahili");
    Language korean = languageRepo.findByName("Korean");

    List<Word> wordsToAdd = new ArrayList<>();
    Word raccoon = new Word();
    raccoon.setName("raccoon");
    raccoon.setLanguage(powhatan);
    raccoon.setDefinition("Trash Panda");
    wordsToAdd.add(raccoon);

    Word tutaonana = new Word();
    tutaonana.setName("tutaonana");
    tutaonana.setLanguage(swahili);
    wordsToAdd.add(tutaonana);

    Word fernweh = new Word();
    fernweh.setName("fernweh");
    fernweh.setLanguage(german);
    wordsToAdd.add(fernweh);

    Word jerky = new Word();
    jerky.setName("jerky");
    jerky.setLanguage(quechua);
    wordsToAdd.add(jerky);

    Word amphisbaena = new Word();
    amphisbaena.setName("amphisbaena");
    amphisbaena.setLanguage(english);
    wordsToAdd.add(amphisbaena);

    Word argleBargle = new Word();
    argleBargle.setName("argle-bargle");
    argleBargle.setLanguage(english);
    wordsToAdd.add(argleBargle);

    Word chocolat = new Word();
    chocolat.setName("chocolat");
    chocolat.setLanguage(french);
    wordsToAdd.add(chocolat);

    Word sundubu = new Word();
    sundubu.setName("sundubu");
    sundubu.setLanguage(korean);
    wordsToAdd.add(sundubu);

    Word mabuhay = new Word();
    mabuhay.setName("mabuhay");
    mabuhay.setLanguage(tagalog);
    wordsToAdd.add(mabuhay);

    Word ubiquitous = new Word();
    ubiquitous.setName("ubiquitous");
    ubiquitous.setLanguage(english);
    wordsToAdd.add(ubiquitous);

    Word kuddelmuddel = new Word();
    kuddelmuddel.setName("kuddelmuddel");
    kuddelmuddel.setLanguage(german);
    wordsToAdd.add(kuddelmuddel);

    Word dingsbums = new Word();
    dingsbums.setName("dingsbums");
    dingsbums.setLanguage(german);
    wordsToAdd.add(dingsbums);

    Word wema = new Word();
    wema.setName("wema");
    wema.setLanguage(swahili);
    wordsToAdd.add(wema);

    Word pamplemousse = new Word();
    pamplemousse.setName("pamplemousse");
    pamplemousse.setLanguage(french);
    wordsToAdd.add(pamplemousse);

    Word discombobulated = new Word();
    discombobulated.setName("discombobulated");
    discombobulated.setLanguage(english);
    wordsToAdd.add(discombobulated);

    if (!wordRepo.findAll().iterator().hasNext()) {
      wordRepo.saveAll(wordsToAdd);
    }
  }
}
