import { useState } from "react";
import words from "./wordList.json";
import { Drawing } from "./Drawing";
import { KeyB } from "./KeyB";
import { Word } from "./Word";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessLetter, setGuessLetters] = useState<string[]>([]);
  console.log(wordToGuess);
  const inCorrectL = guessLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: " 0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: " 2rem ", textAlign: "center" }}>Lose Win</div>
      <Drawing numberofGuesses={inCorrectL.length} />
      <Word guessLetter={guessLetter} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <KeyB />
      </div>
    </div>
  );
}

export default App;
