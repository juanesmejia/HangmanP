import styles from "./Keyboard.module.css";
const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBProps = {
  activeLetter: string[];
  inActiveLetter: string[];
  addGLetter: (letter: string) => void;
  disabled?: boolean;
};

export function KeyB({
  activeLetter,
  inActiveLetter,
  disabled = false,
  addGLetter,
}: KeyBProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {Keys.map((key) => {
        const active = activeLetter.includes(key);
        const Nactive = inActiveLetter.includes(key);
        return (
          <button
            onClick={() => addGLetter(key)}
            className={`${styles.btn} ${active ? styles.active : ""} ${
              Nactive ? styles.inactive : ""
            }`}
            disabled={active || Nactive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
