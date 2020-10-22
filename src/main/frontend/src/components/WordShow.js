import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from "react-router-dom"
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
  const [afterDeleteWord, setAfterDeleteWord] = useState(false)

  useEffect(() => {
    fetch(`/api/v1/words/${id}`)
      .then(result => {
        return result.json()
      })
      .then(word => {
        setWord(word)
      })
  }, [refreshWord])

  const refreshReviews = () => {
    fetch(`/api/v1/words/${id}/reviews`)
      .then(result => {
        return result.json()
      })
      .then(reviews => {
        setReviews(reviews)
      })
  }

  useEffect(() => {
    refreshReviews();
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

  const handleDeleteClick = (id) => {
    fetch(`/api/v1/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(() => { refreshReviews() });
  }

  const handleDelWordClick = () => {
    fetch(`/api/v1/words/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setAfterDeleteWord(true)
      })
  }

  let editForm = showEditForm === true ?
    (<WordForm word={word} setRefreshWord={setRefreshWord} refreshWord={refreshWord} />) : null

  let reviewForm =
    displayForm === true ?
      <WordReviewForm id={word.id}
        word={word}
        setDisplayForm={setDisplayForm} /> : null

  let mappedReviews = reviews.map(review => {
    return (
      <div key={review.id}>
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <div className="card blue-grey lighten-2">
              <div className="card-content white-text">
                <span className="card-title">Review: </span>
                <p>Username: {review.user.username}</p>
                <p>Rating: {review.rating}</p>
                <p>Review: {review.comment}</p>
              </div>
              <div className="card-action">
                <a className="waves-effect waves-light btn" onClick={() => { handleShowMoneyClick(review.id) }}><i className="small material-icons left">mode_edit</i>Edit This Review</a>
                <a className="waves-effect waves-light btn" onClick={() => { handleDeleteClick(review.id) }}><i className="small material-icons left">delete</i>Delete This Review</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          {showMeTheMoney === review.id ?
            (<WordReviewForm word={word} review={review} handleReviewClick={handleReviewClick} setDisplayForm={setDisplayForm} id={word.id} setShowMeTheMoney={setShowMeTheMoney} />) : null}
        </div>
      </div>
    )
  })




  if (afterDeleteWord) {
    return <Redirect to="/words" />
  } else {
    return (
      <div className="row padded-bottom">
        <div className="col s12 m6 offset-m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{word.name}</span>
              <p>Definition: {word.definition}</p>
              <p>Language: {word.language?.name}</p>
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn" onClick={handleEditClick}><i className="small material-icons left">mode_edit</i>Edit This Word</a>
              <a className="waves-effect waves-light btn" onClick={handleDelWordClick}><i className="small material-icons left">delete</i>Delete This Word</a>
              <a className="waves-effect waves-light btn" onClick={handleReviewClick}><i className="small material-icons left">rate_review</i>Review This Word</a>
            </div>
          </div>
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
}
export default WordShow
