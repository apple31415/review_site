package com.launchacademy.reviews.models;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name="words")
public class Word {
  @Id
  @SequenceGenerator(name="word_generator", sequenceName="words_id_seq", allocationSize
      = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="word_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name = "word")
  private String word;

  @Column(name = "definition")
  private String definition;

  @OneToMany(mappedBy = "word")
  private List<Review> reviews = new ArrayList<Review>();

  @ManyToOne
  @JoinColumn(name = "language_id", nullable = false)
  private Language language;
}