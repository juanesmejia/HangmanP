import {useState} from 'react'
import words from "./wordList.json"

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
      <div>
        Lose
        Win
      </div>

    </div>
  )
}

export default App
