import {useState} from 'react'
import words from "./wordList.json"
import { Drawing } from './Drawing'
import { KeyB } from './KeyB';
import { Word } from './Word';



function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessLetter, setGuessLetters] = useState<string[]> ([])
  console.log(wordToGuess)
  return (
    <div
      style = {{
        maxWidth: "850px", display: "flex", flexDirection: "column",
        gap: "2rem", margin: " 0 auto", alignItems: "center"
      }}
    >
      <div style = {{ fontSize:" 3rem ", textAlign: "center"}}>
        Lose
        Win
      </div>
      <Drawing/>
      <KeyB/>
      <Word/>
      

    </div>
  )
}

export default App
