import React, { useState } from "react";
import canMove from "./utils";

import "./App.css";
import { ChessBoard } from "./components/ChessBoard";

enum ValidMove {
  "true",
  "false",
  "unset",
}

function App() {
  const [piece, setPiece] = useState("");
  const [startSquare, setStartSquare] = useState("");
  const [endSquare, setEndSquare] = useState("");
  const [colour, setColour] = useState("");

  const [validMove, setValidMove] = useState(ValidMove.unset);

  const handleSelectSquare = (e: React.MouseEvent<HTMLElement>) => {
    if (startSquare === "") {
      console.log((e.target as HTMLElement).id);
      setStartSquare((e.target as HTMLElement).id);
    }

    if (startSquare && endSquare === "") {
      console.log((e.target as HTMLElement).id);
      setEndSquare((e.target as HTMLElement).id);
    }
  };

  const handleColour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColour(e.target.value);
  };

  const handlePiece = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPiece(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = canMove(piece, startSquare, endSquare, colour);

    const isValid = result ? ValidMove.true : ValidMove.false;

    setValidMove(isValid);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>What colour are you playing as?</label>
        <select onChange={handleColour}>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
        <input
          id="piece"
          placeholder="Choose piece"
          onChange={handlePiece}
        ></input>
        <button type="submit"></button>
      </form>
      {startSquare === "" && (
        <h1>Please select your starting square by clicking on the board</h1>
      )}
      {startSquare && <h2>Starting square = {startSquare}</h2>}

      {startSquare && endSquare === "" && (
        <h1>Please select your ending square by clicking on the board</h1>
      )}
      {endSquare && <h2>End square = {endSquare}</h2>}

      {validMove === ValidMove.true && (
        <h1>This is a valid move!! Great Job!</h1>
      )}
      {validMove === ValidMove.false && (
        <h1>This is not a valid move!! Try again.</h1>
      )}
      <ChessBoard handleSelectSquare={handleSelectSquare} />
    </div>
  );
}

export default App;
