import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😃": "Laughing",
  "😞": "Disappointed",
  "😢": "Crying",
  "😭": "Loudly Crying",
  "😠": "Angry",
  "😎": "Proud",
  "🥵": "Hot Face",
  "🤔": "Thinking",
  "🤫": "Silence",
  "": ""
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setemojiMeaning] = useState("");
  var [emoji, setemoji] = useState("");

  function GetEmojiMeaning(item) {
    setemojiMeaning(emojiDictionary[item]);
  }

  function searchEmojiMeaning(event) {
    var inputemoji = event.target.value;
    setemoji(inputemoji);

    if (inputemoji in emojiDictionary) {
      setemojiMeaning(emojiDictionary[inputemoji]);
    } else {
      setemojiMeaning("This emoji is not in Database");
    }
  }

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <nav className="navigation">play with emojis</nav>
      <div className="container">
        <h1 style={{ color: "purple" }}>Smilee Emoji Interpreter</h1>
        <input
          placeholder={"Enter emoji here"}
          style={{ padding: "1.5rem" }}
          onChange={searchEmojiMeaning}
          value={emoji}
        ></input>
        <div
          style={{
            fontSize: "2rem",
            padding: "2.5rem"
          }}
        >
          {emojis.map((emoji) => (
            <span
              style={{
                padding: "1rem 1rem",
                cursor: "pointer"
              }}
              key={emoji}
              onClick={() => GetEmojiMeaning(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
        {"Get Meaning here 👇"}
        <div
          style={{
            border: "1px solid Black",
            fontSize: "1.5rem",
            padding: "1.5rem",
            textAlign: "center",
            margin: "auto",
            width: "50%",
            backgroundColor: "white"
          }}
        >
          {emojiMeaning}{" "}
        </div>
      </div>
      <footer className="foot"> Don't forget to smile today 🙂</footer>
    </div>
  );
}
