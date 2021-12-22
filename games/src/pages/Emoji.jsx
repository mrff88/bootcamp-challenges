import { useState } from "react";
import "./Emoji.css";

const emojiDictionary = {
  banano: "🍌",
  platano: "🍌",
  manzana: "🍎",
};

const transformTextToEmoji = (text) =>
  text
    .split(" ")
    .map((word) => emojiDictionary[word] ?? word)
    .join(" ");

function Emoji() {
  const [color, setColor] = useState("blue");
  const [text, setText] = useState("Nuevo text");

  const onTextAreaChange = (e) => {
    setText(e.target.value);
  };

  const textStyle = { color };

  return (
    <div className="App">
      <textarea value={text} cols="30" rows="10" onChange={onTextAreaChange}></textarea>
      <input
        className="app__input"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p style={textStyle}>{transformTextToEmoji(text)}</p>
    </div>
  );
}

export default Emoji;
