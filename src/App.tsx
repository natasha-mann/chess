import React, { useState } from "react";
import canMove from "./utils";

import "./App.css";

enum ValidMove {
  "true",
  "false",
  "unset",
}

function App() {
  const [piece, setPiece] = useState("");
  const [startSquare, setStartSquare] = useState("");
  const [endSquare, setEndSquare] = useState("");
  const [validMove, setValidMove] = useState(ValidMove.unset);

  const handlePiece = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPiece(e.target.value);
  };

  const handleStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartSquare(e.target.value);
  };

  const handleEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndSquare(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = canMove(piece, startSquare, endSquare);

    const isValid = result ? ValidMove.true : ValidMove.false;

    setValidMove(isValid);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          id="piece"
          placeholder="Choose piece"
          onChange={handlePiece}
        ></input>
        <input
          id="start"
          placeholder="start square"
          onChange={handleStart}
        ></input>
        <input id="end" placeholder="end square" onChange={handleEnd}></input>
        <button type="submit"></button>
      </form>

      {validMove === ValidMove.true && (
        <h1>This is a valid move!! Great Job!</h1>
      )}
      {validMove === ValidMove.false && (
        <h1>This is not a valid move!! Try again.</h1>
      )}
    </div>
  );
}

export default App;
