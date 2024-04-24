import emojipedia from "./emojipedia";
import react from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>[EMOJIPEDIA]</h1>
      <div className="card-grid">
        {emojipedia.map((emojiData) => (
          <div className="card" key={emojiData.id}>
            <div className="emoji">{emojiData.emoji}</div>
            <h2>{emojiData.name}</h2>
            <p>{emojiData.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
