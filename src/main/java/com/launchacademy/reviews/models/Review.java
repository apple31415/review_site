package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="reviews")
public class Review {
  @Id
  @SequenceGenerator(name="review_generator", sequenceName="reviews_id_seq", allocationSize
      = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="review_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name = "rating", nullable = false)
  private Integer rating;

  @Column(name = "comment")
  private String comment;

  @ManyToOne
  @JoinColumn(name="word_id", nullable = false)
  @JsonIgnoreProperties("reviews")
  private Word word;

  @ManyToOne
  @JoinColumn(name="user_id", nullable = false)
  @JsonIgnoreProperties("reviews")
  private User user;
}