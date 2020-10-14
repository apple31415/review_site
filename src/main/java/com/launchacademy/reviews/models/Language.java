package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

  @Column(name = "name", nullable = false)
  private String name;

  @OneToMany(mappedBy = "language", cascade = CascadeType.ALL)
  @JsonIgnoreProperties("language")
  private List<Word> words;
}