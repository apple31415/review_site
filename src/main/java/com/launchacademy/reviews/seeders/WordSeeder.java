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
    tutaonana.setDefinition("See you later!");
    wordsToAdd.add(tutaonana);

    Word fernweh = new Word();
    fernweh.setName("fernweh");
    fernweh.setLanguage(german);
    fernweh.setDefinition("Longing to be somewhere else, literally 'distance pain'");
    wordsToAdd.add(fernweh);

    Word jerky = new Word();
    jerky.setName("jerky");
    jerky.setLanguage(quechua);
    jerky.setDefinition("Jerky. It's the same. Don't overthink it.");
    wordsToAdd.add(jerky);

    Word amphisbaena = new Word();
    amphisbaena.setName("amphisbaena");
    amphisbaena.setLanguage(english);
    amphisbaena.setDefinition("mythical creature that is a serpent with a head at both ends");
    wordsToAdd.add(amphisbaena);

    Word argleBargle = new Word();
    argleBargle.setName("argle-bargle");
    argleBargle.setLanguage(english);
    argleBargle.setDefinition("meaningless talk");
    wordsToAdd.add(argleBargle);

    Word chocolat = new Word();
    chocolat.setName("chocolat");
    chocolat.setLanguage(french);
    chocolat.setDefinition("Chocolate - it's a cognate.");
    wordsToAdd.add(chocolat);

    Word sundubu = new Word();
    sundubu.setName("sundubu");
    sundubu.setLanguage(korean);
    sundubu.setDefinition("Korean tofu stew - it will warm you up!");
    wordsToAdd.add(sundubu);

    Word mabuhay = new Word();
    mabuhay.setName("mabuhay");
    mabuhay.setLanguage(tagalog);
    mabuhay.setDefinition("Welcome");
    wordsToAdd.add(mabuhay);

    Word ubiquitous = new Word();
    ubiquitous.setName("ubiquitous");
    ubiquitous.setLanguage(english);
    ubiquitous.setDefinition("Omnipresent, existing everywhere");
    wordsToAdd.add(ubiquitous);

    Word kuddelmuddel = new Word();
    kuddelmuddel.setName("kuddelmuddel");
    kuddelmuddel.setLanguage(german);
    kuddelmuddel.setDefinition("mess, chaos");
    wordsToAdd.add(kuddelmuddel);

    Word dingsbums = new Word();
    dingsbums.setName("dingsbums");
    dingsbums.setLanguage(german);
    dingsbums.setDefinition("thingamajig or thingamabob");
    wordsToAdd.add(dingsbums);

    Word wema = new Word();
    wema.setName("wema");
    wema.setLanguage(swahili);
    wema.setDefinition("kindness");
    wordsToAdd.add(wema);

    Word pamplemousse = new Word();
    pamplemousse.setName("pamplemousse");
    pamplemousse.setLanguage(french);
    pamplemousse.setDefinition("grapefruit");
    wordsToAdd.add(pamplemousse);

    Word discombobulated = new Word();
    discombobulated.setName("discombobulated");
    discombobulated.setLanguage(english);
    discombobulated.setDefinition("characterized by confusion or disorder");
    wordsToAdd.add(discombobulated);

    if (!wordRepo.findAll().iterator().hasNext()) {
      wordRepo.saveAll(wordsToAdd);
    }
  }
}
