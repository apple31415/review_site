package com.launchacademy.reviews.seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Seeder implements CommandLineRunner {

  private WordSeeder wordSeeder;
  private LanguageSeeder languageSeeder;
  private UserSeeder userSeeder;

  @Autowired
  public Seeder(WordSeeder wordSeeder,
      LanguageSeeder languageSeeder, UserSeeder userSeeder) {
    this.wordSeeder = wordSeeder;
    this.languageSeeder = languageSeeder;
    this.userSeeder = userSeeder;
  }

  @Override
  public void run(String... args) throws Exception {
    languageSeeder.seed();
    wordSeeder.seed();
    userSeeder.seed();
  }
}
