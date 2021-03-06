import React, { useEffect, useState } from "react";

const WordForm = props => {
  const [languagesList, setLanguagesList] = useState([]);
  const [newWord, setNewWord] = useState({
    name: props.word?.name,
    definition: props.word?.definition,
    languageName: props.word?.language?.name
  });

  useEffect(() => {
    fetch("/api/v1/languages")
      .then(response => response.json())
      .then(response => {
        setLanguagesList(response);
      })
  }, []);

  const dropdown = languagesList.map((language) =>
    <option key={language.id} name="languageName" value={language.name}>{language.name}</option>)

  const handleInputChange = event => {
    setNewWord({
      ...newWord, [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = event => {
    setNewWord({
      name: "",
      definition: "",
      languageName: ""
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    fetch("/api/v1/words", {
      method: props.word ? "PUT" : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newWord, wordId: props.word ? props.word.id : -1 })
    })
      .then(() => {
        clearForm()
        handleRefreshClick()
      })
  }

  const handleRefreshClick = () => {
    let refreshWord = props.refreshWord === true ? false : true
    if(props.setRefreshWord){
      props.setRefreshWord(refreshWord)
    }
  }

  let form = (
    < div className="row" >
      <form className="col s4 offset-s4" onSubmit={onSubmit}>
        <div className="card-panel teal darken-3">
          <div className="row">
            <div className="input-field">
              <input placeholder="Word" type="text" name="name" className="validate input" onChange={handleInputChange}
                value={newWord.name} required />
            </div>
            <div className="input-field">
              <input placeholder="Definition" type="text" className="validate input" name="definition"
                onChange={handleInputChange}
                value={newWord.definition} required />
            </div>
          </div>
          <div className="input-field">
            <select className="browser-default" required
              name="languageName"
              onChange={handleInputChange}
              value={newWord.languageName}>
              <option value="">--Select A Language--</option>
              {dropdown}
            </select>
          </div>
        </div>
        <div className="col s8 offset-s2">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </div>
      </form>
    </div>
  )
  return form
}

export default WordForm
