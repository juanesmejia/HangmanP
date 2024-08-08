type WordProps = {
  guessLetter: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function Word({ guessLetter, wordToGuess, reveal = false }: WordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessLetter.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessLetter.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
