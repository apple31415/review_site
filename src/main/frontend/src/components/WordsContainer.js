import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const WordsContainer = (props) => {
  const [words, setWords] = useState([])

  let wordType = props.match.params.words

  useEffect(() => {
    fetch('api/v1/words')
    .then(result => result.json())
    .then(words => {
      setWords(words)
    })
  }, [wordType])
  
  let WordsElements = mappedWords.map((word, index) => {
    return(
      <div key={index}>
        <Link to={`/words/${word.id}`}>
          <h4>Word: {word.name}</h4>
        </Link>
        <p>Language: {word.language.name}</p>
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