import React, { useState, useEffect } from "react"
import _ from "lodash";

const WordReviewForm = props => {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState({})
  const [reviewForm, setReviewForm] = useState({
      userId: "",
      word: props.word,
      rating: '',
      comment: ''
  })

  useEffect(() => {
    fetch(`/api/v1/users`)
      .then (result => {
        return result.json()
      })
      .then(users => {
        setUsers(users)
      })
  }, [])

  let requiredFields = {
    userId : "User",
    word : "word",
    rating : "Rating",
  }

  const handleChange=(event) => {
    setReviewForm({
      ...reviewForm, 
      [event.target.name] : event.target.value
    })
  }

  const handleClose = () => {
    props.setDisplayForm(false)
  }

  let id = props.id

  const handleSubmit = (event) => {
    event.preventDefault()
    let formErrors = {}
    for (let field of Object.keys(requiredFields)) {
      if (!reviewForm[field]){
        formErrors = {
          ...formErrors,
          [field] : `${requiredFields[field]} cannot be blank.`
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
        method:"POST",
        body: JSON.stringify(formData),
        headers: {"Content-Type" : "application/json"}
      })
      .then(result => {
        setReviewForm({
          userId: '',
          rating: '',
          comment: ''
      })
        props.setReviewStatus("Thanks for your comment!")
      })
      .then(() => {
        props.setDisplayForm(false)
      })
    } 
  }
  let startingUsers = [<option value=""></option>]
  let mappedUsers = startingUsers.concat(users.map(user => {
    return <option value={user.id}>{user.username}</option>
  }))

  return(
    <>
    <button onClick={handleClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <label>User
          <p className="error">{errors.userId}</p>
          <select onChange={handleChange} name="userId" id="userId" value={reviewForm.userId}>
            {mappedUsers}
          </select>
        </label>
        <label>Rating
          <p className="error">{errors.rating}</p>
          <select onChange={handleChange} type="text" name="rating" id="rating" value={reviewForm.rating}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>Review
          <textarea onChange={handleChange} name="comment" id="comment" value={reviewForm.comment} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default WordReviewForm