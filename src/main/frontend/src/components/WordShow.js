import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import WordReviewForm from "./WordReviewForm"

const WordShow = (props) => {
  let { id } = useParams();
  const [word, setWord] = useState([])
  const [displayForm, setDisplayForm] = useState([])
  const [reviewStatus, setReviewStatus] = useState([])
  
  useEffect(() => {
    fetch(`/api/v1/words/${id}`)
      .then(result => {
        return result.json()
      })
      .then(word => {
        setWord(word)
      })
  }, [])

  const handleReviewClick = () => {
    let formState = displayForm === true ? false : true
    setDisplayForm(formState)
  }

  let reviewForm
  if(reviewStatus === "pending") reviewForm = "Thanks for your Review!" 
    else {
      reviewForm = displayForm === true ?
      <WordReviewForm id = {word.id} 
      word = {word}
      setReviewStatus={setReviewStatus}
      setDisplayForm={setDisplayForm} /> : <button onClick={handleReviewClick}>Review Me!</button>
    }
  
  return (
    <div>
      <div>
        <h1>Words Words Words</h1>
        <p>Word: {word.name}</p>
        <p>Definition: {word.definition}</p>
        <p>Language: {word.language?.name}</p>
      </div>
      <div>
        {reviewForm}
      </div>
    </div>
  )
}
export default WordShow