package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.User;
import com.launchacademy.reviews.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class
UsersAPIController {
  private final UserRepository userRepository;

  @Autowired
  public UsersAPIController(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @GetMapping
  public Iterable<User> getAll(){
    return userRepository.findAll();
  }
}


