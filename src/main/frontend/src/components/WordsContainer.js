import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const WordsContainer = (props) => {
  const [words, setWords] = useState([])

  useEffect(() => {
    fetch('/api/v1/words')
      .then(result => result.json())
      .then(words => {
        setWords(words)
      })
  }, [])

  let WordsElements = words.map((word, index) => {
    return (
      <div class="row" key={index}>
        <div class="col s12 m6 offset-m3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{word.name}</span>
              <p>Language: {word.language.name}</p>
            </div>
            <div class="card-action">
              <Link to={`/words/${word.id}`}>See the definition and {word.reviews.length} review(s)
              </Link>
            </div>
          </div>
        </div>
      </div>
    )

  })

  return (
    <div>
      {WordsElements}
    </div>
  )
}
export default WordsContainer 