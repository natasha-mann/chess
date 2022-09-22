import whitePawn from "../images/whitePawn.jpg";
import blackPawn from "../images/blackPawn.jpeg";
import whiteRook from "../images/whiteRook.jpg";
import blackRook from "../images/blackRook.jpg";
import whiteBishop from "../images/whiteBishop.jpg";
import blackBishop from "../images/blackBishop.jpg";
import whiteKing from "../images/whiteKing.jpg";
import blackKing from "../images/blackKing.png";
import whiteQueen from "../images/whiteQueen.jpg";
import blackQueen from "../images/blackQueen.jpg";
import whiteKnight from "../images/whiteKnight.jpg";
import blackKnight from "../images/blackKnight.jpg";

export interface IPiece {
  name: string;
  label: string;
  whiteImg: string;
  blackImg: string;
}

export const pieces: IPiece[] = [
  { name: "pawn", label: "Pawn", whiteImg: whitePawn, blackImg: blackPawn },
  { name: "rook", label: "Rook", whiteImg: whiteRook, blackImg: blackRook },
  {
    name: "bishop",
    label: "Bishop",
    whiteImg: whiteBishop,
    blackImg: blackBishop,
  },
  { name: "king", label: "King", whiteImg: whiteKing, blackImg: blackKing },
  { name: "queen", label: "Queen", whiteImg: whiteQueen, blackImg: blackQueen },
  {
    name: "knight",
    label: "Knight",
    whiteImg: whiteKnight,
    blackImg: blackKnight,
  },
];
