import React, { useEffect, useState } from "react";

const WordForm = props => {
  const [languagesList, setLanguagesList] = useState([]);
  const [newWord, setNewWord] = useState({
    name: "",
    definition: "",
    languageName: ""
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
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWord),
    })
      .then(() => {
        clearForm();
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <label>Word
          <input
                required
                type="text"
                name="name"
                onChange={handleInputChange}
                value={newWord.name}
                placeholder="Your word here" />
            </label>
          </div>
          <div className="medium-6 cell">
            <label>Definition
          <input
                required
                type="text"
                name="definition"
                onChange={handleInputChange}
                value={newWord.definition}
                placeholder="Enter the definition (optional)" />
            </label>
          </div>
          <div>
            <label>Select Language
              <select
                required
                name="languageName"
                onChange={handleInputChange}
                value={newWord.languageName}>
                <option key="0" value="" name="languageName">
                  Select a Language</option>
                {dropdown}
              </select>
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default WordForm;