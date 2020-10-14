import React, {useState, useEffect } from 'react'
import ReviewForm from './ReviewForm'

const WordShow = (props) => {
  let wordId = props.match.params.id
  const [word, setWord] = useState([])
  const [newReview, setNewReview] = useState([])

  useEffect(() => {
   fetch('api/v1${props.location.pathname}')
    .then(result => result.json())
    .then(word => {
      setWord(word)
    })
  }, []);

  const handleWordClick = () => {
    let formState = newReview === true ? false : true
    setNewReview(formState)
  }

  return (
    <div>
      <h1>Words Words Words</h1>
      <p>Word: {word.name}</p>
      <p>Definition: {word.definition}</p>
<<<<<<< HEAD
      <p>Language: {word.name_id}</p>
=======
      <p>Language: {word.language.name}</p>
>>>>>>> wordShowPage
      {reviewForm}
    </div>
  )
} 
