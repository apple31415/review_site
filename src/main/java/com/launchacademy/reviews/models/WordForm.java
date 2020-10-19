package com.launchacademy.reviews.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@NoArgsConstructor
public class WordForm {
  private String name;
  private String definition;
  private String languageName;
}