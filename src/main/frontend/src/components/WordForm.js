import React, { useEffect, useState } from "react";

function WordForm() {
  const [languagesList, setLanguagesList] = useState([]);
  useEffect(() => {
    fetch("/api/v1/languages")
    .then(response => response.json())
    .then(response => {
      setLanguagesList(response);
    })
  }, []);
  const dropdown = languagesList.map((language) =>
  <option key={language.id} value={language.name}>{language.name}</option>)
                                     
  return (
    <form>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <label>Word
              <input type="text" placeholder=".medium-6.cell"/>
            </label>
          </div>
          <div className="medium-6 cell">
            <label>Definition
              <input type="text" placeholder=".medium-6.cell"/>
            </label>
          </div>
          <div>
            <label>Select Language
              <select>{dropdown}</select>
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
