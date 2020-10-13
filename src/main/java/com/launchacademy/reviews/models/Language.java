package com.launchacademy.reviews.models;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name="languages")
public class Language {
  @Id
  @SequenceGenerator(name="language_generator", sequenceName="languages_id_seq", allocationSize
      = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="language_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name = "language", nullable = false)
  private String language;

  @OneToMany(mappedBy = "language")
  private List<Word> words = new ArrayList<Word>();
}