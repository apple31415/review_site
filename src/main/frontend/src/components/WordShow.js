import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const WordShow = (props) => {
  let { id } = useParams();
  const [word, setWord] = useState([])

  useEffect(() => {
    fetch(`/api/v1/words/${id}`)
      .then(result => {
        return result.json()
      })
      .then(word => {
        setWord(word)
      })
  }, []);

  return (
    <div>
      <h1>Words Words Words</h1>
      <p>Word: {word.name}</p>
      <p>Definition: {word.definition}</p>
      <p>Language: {word.language?.name}</p>
    </div>
  )
}
export default WordShow