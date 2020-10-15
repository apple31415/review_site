import React, { useState } from "react"
import _ from "lodash";

const WordReviewForm = props => {
  const [reviewForm, setReviewForm] = useState({
      user:{
        userName: "Apple31415",
        name: "Ashley",
        email: "email@gmail.com",
        reviews: []
      },
      word: props.word,
      rating: '',
      comment: ''
  })

  let requiredFields = {
    user : "User",
    word : "word",
    rating : "Rating",
  
  }
  const [errors, setErrors] = useState({})

  const handleChange=(event) => {
    setReviewForm({
      ...reviewForm, 
      [event.target.name] : event.target.value
    })
  }

  const handleClose = () => {
    props.setDisplayForm(false)
  }

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
    let id = props.id
    setErrors(formErrors)
    if (_.isEmpty(errors)) {
      fetch(`/api/v1/words/${id}`, {
        method:"POST",
        body: JSON.stringify(reviewForm),
        headers: {"Content-Type" : "application/json"}
      })
      .then(result => {
        setReviewForm({
          user: '',
          rating: '',
          comment: ''
      })
        props.setReviewStatus("Thanks for your comment!")
      })
    } 
  }

  return(
    <>
    <button onClick={handleClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <label>User
          <p className="error">{errors.user}</p>
          <input type="text" name="user" id="user" value={reviewForm.name} />
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