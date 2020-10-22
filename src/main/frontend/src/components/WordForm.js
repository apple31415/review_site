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
    props.setRefreshWord(refreshWord)
  }

  let form = (
    < div className="row" >
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Word" type="text" name="name" className="validate" onChange={handleInputChange}
              value={newWord.name} required />
          </div>
          <div className="input-field col s6">
            <input placeholder="Definition" type="text" className="validate" name="definition"
              onChange={handleInputChange}
              value={newWord.definition} required />
          </div>
        </div>
        <div className="input-field col s12">
          <select required
            name="languageName"
            onChange={handleInputChange}
            value={newWord.languageName}>
            <option value="">Language</option>
            {dropdown}
          </select>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  )
  return form
}

export default WordForm
