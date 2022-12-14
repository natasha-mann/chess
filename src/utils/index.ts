import { pieces } from "./pieces";

export const validColumns = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const validRows = [1, 2, 3, 4, 5, 6, 7, 8];

const validateInput = (
  piece: string,
  startCol: string,
  endCol: string,
  startRow: number,
  endRow: number
) => {
  if (
    validColumns.includes(startCol) &&
    validColumns.includes(endCol) &&
    validRows.includes(startRow) &&
    validRows.includes(endRow) &&
    pieces.find((p) => p.name === piece)
  ) {
    return true;
  }
};

export default function canMove(
  piece: string,
  start: string,
  end: string,
  colour: string = "white"
): Boolean {
  const [startCol, sRow] = start.split("");
  const [endCol, eRow] = end.split("");

  const endRow = parseInt(eRow);
  const startRow = parseInt(sRow);
  const startColIndex = validColumns.findIndex((e) => e === startCol) + 1;
  const endColIndex = validColumns.findIndex((e) => e === endCol) + 1;
  const colDiff = endColIndex - startColIndex;
  const rowDiff = endRow - startRow;

  const diagonalMove =
    colDiff === rowDiff || colDiff === -rowDiff || -colDiff === rowDiff;
  const sameCol = startCol === endCol;
  const sameRow = startRow === endRow;
  const oneRowLeftOrRight = endRow === startRow + 1 || endRow === startRow - 1;
  const oneColLeftOrRight =
    endColIndex === startColIndex + 1 || endColIndex === startColIndex - 1;

  if (!validateInput(piece, startCol, endCol, startRow, endRow)) {
    throw new Error("Invalid Input");
  }

  if (piece === "pawn") {
    if (startCol !== endCol) return false;

    let maxMoves = 1;
    const firstMove = colour === "white" ? startRow === 2 : startRow === 7;
    if (firstMove) maxMoves = 2;

    if (
      colour === "white" &&
      endRow <= startRow + maxMoves &&
      endRow > startRow
    )
      return true;

    if (
      colour === "black" &&
      endRow >= startRow - maxMoves &&
      endRow < startRow
    )
      return true;
  }

  if (piece === "rook") {
    if (sameCol || sameRow) return true;
  }

  if (piece === "bishop") {
    if (diagonalMove) return true;
  }

  if (piece === "king") {
    if (
      (sameCol && oneRowLeftOrRight) ||
      (sameRow && oneColLeftOrRight) ||
      (oneColLeftOrRight && oneRowLeftOrRight)
    )
      return true;
  }

  if (piece === "knight") {
    if (
      oneColLeftOrRight &&
      (endRow === startRow - 2 || endRow === startRow + 2)
    )
      return true;

    if (
      oneRowLeftOrRight &&
      (endColIndex === startColIndex - 2 || endColIndex === startColIndex + 2)
    )
      return true;
  }

  if (piece === "queen") {
    if (sameCol || sameRow || diagonalMove) return true;
  }

  return false;
}
