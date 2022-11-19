import * as React from "react"
import { useState, useEffect } from "react"
import Hangul from "hangul-js"

import '../styles/index.css'

const cachedWordsKey = "all-hangeul-words"
async function fetchWords() {
  return await fetch('https://raw.githubusercontent.com/uniglot/korean-word-ipa-dictionary/main/scripts/lookup-tables/kodict_entry.txt')
  .then( f => f.text() )
  .then(t => t.split('\n').slice(1))
}

function speakWord(word) {
  let utterance = new SpeechSynthesisUtterance()
  //utterance.voice = voice
  utterance.text = word
  utterance.lang = 'ko'
  utterance.volume = 1

  speechSynthesis.speak(utterance)
}

let allWords = []
const IndexPage = () => {
  const [isLoading, setLoading] = useState(true)
  const [currentWord, setCurrentWord] = useState('')
  const [currentDecompo, setDecomposition] = useState([])

  const decomposeWord = (word) => {
    let jamo = Hangul.disassemble(word)
    setDecomposition([...new Set(jamo)])
  }

  const pickRandomWord = ()=>{
    if (allWords.length === 0) {
      setCurrentWord("")
      return
    }
    setDecomposition([])

    let index = Math.trunc(Math.random() * allWords.length)
    console.log(index)

    const pickedWord = allWords[index]
    setCurrentWord(pickedWord)

    decomposeWord(pickedWord)
  }

  useEffect(() => {
    fetchWords()
      .then(result => {
        setLoading(false)

        allWords = result

        pickRandomWord()
      })
      .catch(console.error)
  }, [])

  return (
    <main>
      { isLoading ? <p>Loading...</p> : <></>}

      <div id="jamo-container">
        {
          currentDecompo.map(j => (
            <span key={j} className='jamo-item'>{j}</span>
          ))
        }
      </div>

      <h1>{currentWord}</h1>
      
      <button onClick={pickRandomWord}>Random</button>
      <button onClick={()=>speakWord(currentWord)}>Play</button>
    </main>
  )
}

export default IndexPage

export const Head = () => <>
  <title>Hangeul Practice</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
</>
