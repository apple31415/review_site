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
    <div id="each-word">
      {WordsElements}
    </div>
  )
}
export default WordsContainer 