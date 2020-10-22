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
      <div className="row" key={index}>
        <div className="col s12 m6 offset-m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{word.name}</span>
              <p>Language: {word.language.name}</p>
            </div>
            <div className="card-action">
              <Link to={`/words/${word.id}`} className="waves-effect waves-light btn"><i className="small material-icons left">add_box</i>See the definition and {word.reviews.length} review(s)</Link>
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