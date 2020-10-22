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
          ...formData, reviewId: props.review ? props.review.id : -1
        }),
        headers: { "Content-Type": "application/json" }
      })
        .then(result => {
          setReviewForm({
            userId: '',
            rating: '',
            comment: ''
          })
        })
        .then(() => {
          handleClose()
        })
    }
  }
  let startingUsers = [<option key="-1" value=""></option>]
  let mappedUsers = startingUsers.concat(users.map(user => {
    return <option value={user.id} key={user.id}>{user.username}</option>
  }))

  return (
    <div className="row">
      <button onClick={handleClose}>Close</button>
      <form className="col s4 offset-s4" onSubmit={handleSubmit}>
        <div className="row">
          <label>User
          <p className="error">{errors.userId}</p>
            <select onChange={handleChange} name="userId" id="userId" value={reviewForm.userId}>
              {mappedUsers}
            </select>
          </label>
        </div>
        <div className="row">
          <p>Rating:</p>
          <p className="error">{errors.rating}</p>
          <input className="with-gap" onChange={handleChange} type="radio" id="rating1" name="rating" value="1" checked={reviewForm.rating == 1} />
          <label htmlFor="rating1"><span>One</span></label>
          <input onChange={handleChange} type="radio" id="rating2" name="rating" value="2" checked={reviewForm.rating == 2} />
          <label htmlFor="rating2"><span>Two</span></label>
          <input onChange={handleChange} type="radio" id="rating3" name="rating" value="3" checked={reviewForm.rating == 3} />
          <label htmlFor="rating3"><span>Three</span></label>
          <input onChange={handleChange} type="radio" id="rating4" name="rating" value="4" checked={reviewForm.rating == 4} />
          <label htmlFor="rating4"><span>Four</span></label>
          <input onChange={handleChange} type="radio" id="rating5" name="rating" value="5" checked={reviewForm.rating == 5} />
          <label htmlFor="rating5"><span>Five</span></label>
        </div>
        <div className="row">
          <label>Review
          <textarea onChange={handleChange} name="comment" id="comment" value={reviewForm.comment} />
          </label>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default WordReviewForm