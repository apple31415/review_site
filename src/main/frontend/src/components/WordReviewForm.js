import React, { useState, useEffect } from "react"
import _ from "lodash";

const WordReviewForm = props => {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState({})
  const [reviewForm, setReviewForm] = useState({
      userId: props.review?.user.id,
      word: props.word,
      rating: props.review?.rating,
      comment: props.review?.comment
  })

  useEffect(() => {
    fetch(`/api/v1/users`)
      .then(result => {
        return result.json()
      })
      .then(users => {
        setUsers(users)
      })
  }, [])

  let requiredFields = {
    userId: "User",
    word: "word",
    rating: "Rating",
  }

  const handleChange = (event) => {
    setReviewForm({
      ...reviewForm,
      [event.target.name]: event.target.value
    })
  }

  const handleClose = () => {
    props.setDisplayForm(false)
    props.setShowMeTheMoney(null)
  }

  let id = props.id

  const handleSubmit = (event) => {
    event.preventDefault()
    let formErrors = {}
    for (let field of Object.keys(requiredFields)) {
      if (!reviewForm[field]) {
        formErrors = {
          ...formErrors,
          [field]: `${requiredFields[field]} cannot be blank.`
        }
      }
    }

    setErrors(formErrors)
    if (_.isEmpty(errors)) {
      let formData = {
        rating: reviewForm.rating,
        comment: reviewForm.comment,
        userId: reviewForm.userId
      }
      fetch(`/api/v1/words/${id}/reviews`, {
        method: props.review ? "PUT" : "POST",
        body: JSON.stringify({
          ...formData, reviewId : props.review ? props.review.id : -1}),
        headers: {"Content-Type" : "application/json"}
      })
      .then(result => {
        setReviewForm({
          userId: '',
          rating: '',
          comment: ''
      })
      })
      .then(() => {
        props.setDisplayForm(false)
        props.handleReviewClick()
      })
    } 
  }
  let startingUsers = [<option key="-1" value=""></option>]
  let mappedUsers = startingUsers.concat(users.map(user => {
    return <option value={user.id} key={user.id}>{user.username}</option>
  }))

  return (
    <>
      <button onClick={handleClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <label>User
          <p className="error">{errors.userId}</p>
          <select onChange={handleChange} name="userId" id="userId" value={reviewForm.userId}>
            {mappedUsers}
          </select>
        </label>
        <div onChange={handleChange}>
          <p>Rating:</p>
          <p className="error">{errors.rating}</p>
          <label>One
            <input type="radio" id="rating" name="rating" value="1" />
          </label>
          <label>Two
            <input type="radio" id="rating" name="rating" value="2" />
          </label>
          <label>Three
            <input type="radio" id="rating" name="rating" value="3" />
          </label>
          <label>Four
            <input type="radio" id="rating" name="rating" value="4" />
          </label>
          <label>Five
            <input type="radio" id="rating" name="rating" value="5" />
          </label>
        </div>
        <label>Review
          <textarea onChange={handleChange} name="comment" id="comment" value={reviewForm.comment} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default WordReviewForm