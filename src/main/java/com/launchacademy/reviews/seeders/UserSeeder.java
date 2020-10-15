package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.Language;
import com.launchacademy.reviews.models.User;
import com.launchacademy.reviews.repositories.LanguageRepository;
import com.launchacademy.reviews.repositories.UserRepository;
import com.launchacademy.reviews.repositories.WordRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserSeeder {

  private UserRepository userRepo;

  @Autowired
  public UserSeeder(UserRepository userRepo) {
    this.userRepo = userRepo;
  }
  public void seed() {
    List<User> fakeUser = new ArrayList<>();
    User user = new User();
    user.setName("Ashley");
    user.setUsername("Apple31415");
    user.setEmail("email@gmail.com");
    fakeUser.add(user);
    if (!userRepo.findAll().iterator().hasNext()) {
      userRepo.saveAll(fakeUser);
    }
  }
}


