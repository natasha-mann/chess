import React, { useState } from "react";
import canMove from "./utils";
import { pieces } from "utils/pieces";

import "./App.css";
import { ChessBoard } from "./components/ChessBoard";
import { Piece } from "components/Piece";

export enum ValidMove {
  "true",
  "false",
  "unset",
}

export const constructImageClass = (piece: string, colour: string): string => {
  return `${colour}${piece.charAt(0).toUpperCase() + piece.slice(1)}`;
};

function App() {
  const [piece, setPiece] = useState("");
  const [startSquare, setStartSquare] = useState("");
  const [endSquare, setEndSquare] = useState("");
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [validMove, setValidMove] = useState(ValidMove.unset);

  const handleSelectSquare = (e: React.MouseEvent<HTMLElement>) => {
    setError(false);
    if (startSquare === "") {
      setStartSquare((e.target as HTMLElement).id);
    }

    setEndSquare((e.target as HTMLElement).id);
  };

  const handleColour = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setError(false);
    setColour(e.target.value);
  };

  const handlePiece = (e: React.MouseEvent<HTMLElement>) => {
    setError(false);

    setPiece((e.currentTarget as HTMLElement).id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!piece || !colour || !startSquare || !endSquare) {
      setError(true);
    }

    const result = canMove(piece, startSquare, endSquare, colour);

    const isValid = result ? ValidMove.true : ValidMove.false;

    setValidMove(isValid);
    setDisabled(true);
  };

  const resetBoard = () => {
    setError(false);
    setPiece("");
    setColour("");
    setStartSquare("");
    setEndSquare("");
    setValidMove(ValidMove.unset);
    setDisabled(false);
  };

  return (
    <div className="App">
      <div className="layout">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="title">Chess Move Validator</h1>
          <div className="select-container">
            <div>
              <h2>Which colour are you playing as?</h2>
              <select
                id="colour"
                onChange={handleColour}
                className="select"
                value={colour || ""}
                disabled={disabled}
                data-testid="colour"
              >
                <option value="">Select a colour:</option>
                <option value="white">White</option>
                <option value="black">Black</option>
              </select>
            </div>

            <h2>Choose your piece:</h2>
            <div className="pieces-container">
              {pieces.map((p) => {
                return (
                  <Piece
                    piece={p}
                    colour={colour}
                    onClick={handlePiece}
                    selected={piece}
                    key={`${colour}${p.name}`}
                  />
                );
              })}
            </div>
          </div>

          {startSquare === "" && (
            <h3 className="instruction">
              Please select your starting square by clicking on the board.
            </h3>
          )}
          {startSquare && endSquare === "" && (
            <h3 className="instruction">
              Please select your ending square by clicking on the board.
            </h3>
          )}

          <div className="chosen">
            {colour && piece && startSquare && endSquare && (
              <h2 data-testid="result">
                Move my {colour} {piece} from {startSquare} to {endSquare}
              </h2>
            )}
          </div>

          {error && (
            <h4 className="red">
              Please make sure you've selected your piece, colour and squares!
            </h4>
          )}
          <div>
            {validMove === ValidMove.unset && (
              <button type="submit" className="button">
                Play!
              </button>
            )}
            <button type="button" className="button" onClick={resetBoard}>
              Reset Board
            </button>
          </div>
          {validMove === ValidMove.true && <h2>This is a valid move!</h2>}
          {validMove === ValidMove.false && (
            <>
              <h2>This is not a valid move.</h2>
              <h2>Try again!</h2>
            </>
          )}
        </form>

        <div className="table-container">
          <ChessBoard
            handleSelectSquare={handleSelectSquare}
            startSquare={startSquare}
            endSquare={endSquare}
            validMove={validMove}
            imageClass={constructImageClass(piece, colour)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
