import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { Drawing } from "./Drawing";
import { KeyB } from "./KeyB";
import { Word } from "./Word";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessLetter, setGuessLetters] = useState<string[]>([]);

  const inCorrectL = guessLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGLetter = useCallback(
    (key: string) => {
      if (guessLetter.includes(key)) return;
      setGuessLetters((currLetters) => [...currLetters, key]);
    },
    [guessLetter]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

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
        <KeyB
          activeLetter={guessLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetter={inCorrectL}
          addGLetter={addGLetter}
        />
      </div>
    </div>
  );
}

export default App;
