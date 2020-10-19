import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const NewUserForm = props => {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
  })

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/api/v1/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" }
    })
      .then(result => {
        setNewUser({
          name: '',
          username: '',
          email: ''
        })
      })
      .then(() => {
        setShouldRedirect(true);
      })
  }

  if (shouldRedirect) {
    return <Redirect to="/words" />
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label>Your Name
          <input onChange={handleChange} type="text" value={newUser.name} name="name" />
        </label>
        <label>Enter a Username
          <input onChange={handleChange} type="text" value={newUser.username} name="username" />
        </label>
        <label>Enter your email
          <input onChange={handleChange} type="text" value={newUser.email} name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewUserForm;