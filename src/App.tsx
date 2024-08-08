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

  const Lost = inCorrectL.length >= 6;
  const Winner = wordToGuess
    .split("")
    .every((letter) => guessLetter.includes(letter));

  const addGLetter = useCallback(
    (key: string) => {
      if (guessLetter.includes(key) || Lost || Winner) return;
      setGuessLetters((currLetters) => [...currLetters, key]);
    },
    [guessLetter, Lost, Winner]
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
  }, [guessLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessLetters([]);
      setWordToGuess(words[Math.floor(Math.random() * words.length)]);
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
      <div style={{ fontSize: " 2rem ", textAlign: "center" }}>
        {Winner && "You did it! - Refresh to play again."}
        {Lost && "Better Luck next Time. - Refresh to play again."}
      </div>
      <Drawing numberofGuesses={inCorrectL.length} />
      <Word reveal={Lost} guessLetter={guessLetter} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <KeyB
          disabled={Lost || Winner}
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
