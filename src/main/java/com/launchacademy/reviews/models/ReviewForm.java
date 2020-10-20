package com.launchacademy.reviews.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
public class ReviewForm {
  private Integer reviewId;
  private Integer rating;
  private String comment;
  private Integer userId;
}
