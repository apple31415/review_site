import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import WordReviewForm from "./WordReviewForm"
import WordForm from "./WordForm"

const WordShow = (props) => {
  let { id } = useParams();
  const [word, setWord] = useState([])
  const [reviews, setReviews] = useState([])
  const [displayForm, setDisplayForm] = useState([])
  const [showMeTheMoney, setShowMeTheMoney] = useState(null)
  const [showEditForm, setShowEditForm] = useState(false)
  const [refreshWord, setRefreshWord] = useState(false)

  useEffect(() => {
    fetch(`/api/v1/words/${id}`)
      .then(result => {
        return result.json()
      })
      .then(word => {
        setWord(word)
      })
  }, [refreshWord])

  useEffect(() => {
    fetch(`/api/v1/words/${id}/reviews`)
      .then(result => {
        return result.json()
      })
      .then(reviews => {
        setReviews(reviews)
      })
  }, [displayForm])

  const handleEditClick = () => {
    let editClick = showEditForm === true ? false : true
    setShowEditForm(editClick)
  }

  const handleShowMoneyClick = (reviewId) => {
    let editClick = showMeTheMoney ? null : reviewId
    setShowMeTheMoney(editClick)
  }

  const handleReviewClick = () => {
    let formState = displayForm === true ? false : true
    setDisplayForm(formState)
  }

  let editForm = showEditForm === true ?
  (<WordForm word={word} setRefreshWord={setRefreshWord} refreshWord={refreshWord}/>) : null

  let reviewForm =
      displayForm === true ?
      <WordReviewForm id = {word.id} 
      word = {word}
      setDisplayForm={setDisplayForm} /> : <button onClick={handleReviewClick}>Review Me!</button>
    
    let mappedReviews = reviews.map(review => {
      return (
      <>
        <div>
          <br/>
          <button onClick={() => {handleShowMoneyClick(review.id)}}>Edit&nbsp;&nbsp;</button>
          <button>Delete</button><br/>
          Username: {review.user.username}<br/>
          Rating: {review.rating}<br/>
          Review: {review.comment}
        </div>
        {showMeTheMoney === review.id ?
        (<WordReviewForm word={word} review={review} handleReviewClick={handleReviewClick}  setDisplayForm={setDisplayForm} id = {word.id} setShowMeTheMoney={setShowMeTheMoney}/>) : null 
        }     
      </>
      )
    })
  
  return (
    <div>
      <div>
        <h1>Words Words Words</h1>
        <p>Word: {word.name}</p>
        <p>Definition: {word.definition}</p>
        <p>Language: {word.language?.name}</p>
        <button onClick={handleEditClick}>Edit&nbsp;&nbsp;</button>
        <button>Delete</button><br/>
      </div>
      <div>
        {editForm}
      </div>
      <div>
        {reviewForm}
      </div>
      <div>
        {mappedReviews}
      </div>
    </div>
  )
}
export default WordShow
