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
      <div className="row">
        <form className="col s4 offset-s4" onSubmit={handleSubmit}>
          <div className="card-panel teal darken-3">
              <input placeholder="Your Name" className="input" onChange={handleChange} type="text" value={newUser.name} name="name" />
              <input placeholder="Enter a Username" className="input" onChange={handleChange} type="text" value={newUser.username} name="username" />
              <input placeholder="Enter your email" className="input" onChange={handleChange} type="text" value={newUser.email} name="email" />
          </div>
          <div className="col s8 offset-s2">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
              </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewUserForm;