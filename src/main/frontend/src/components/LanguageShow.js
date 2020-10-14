import { words } from 'lodash';
import React, {useState, useEffect } from 'react'

const LanguageShow = (props) => {
  let languageId = props.match.params.id
  const [languageType, setLanguageType] = useState([])

  useEffect(() => {
   fetch('api/v1${props.location.pathname}')
    .then(result => result.json())
    .then(languageType => {
      setLanguageType(languageType)
    })
  }, []);

  return (
    <div>
      <h1>Languages!</h1>
      <p>Language: {language.name}</p>
      <p>Words: {language.words}</p>
    </div>
  )
} 
export default WordShow