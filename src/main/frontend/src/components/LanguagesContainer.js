import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const LanguagesContainer = (props) => {
  const [languages, setLanguages] = useState([])

  let languageType = props.match.params.languages

  useEffect(() => {
    fetch('api/v1/languages')
    .then(result => result.json())
    .then(languages => {
      setLanguages(languages)
    })
  }, [languageType])
  
  let languageElements = mappedLanguages.map((language, index) => {
    return(
      <div key={index}>
        <Link to={`/languages/${language.id}`}>
          <h4>Language: {language.name}</h4>
        </Link>
      </div>
    )
  })

  return (
    <div>
      {languageElements}
    </div>
  )
}
export default LanguagesContainer 