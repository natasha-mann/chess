import { IPiece } from "utils/pieces";
import styles from "./chess.module.css";

interface PieceProps {
  piece: IPiece;
  colour: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  selected: string;
}

export const Piece = ({ piece, colour, onClick, selected }: PieceProps) => {
  const imgUrl = colour === "black" ? piece.blackImg : piece.whiteImg;
  const selectedStyle = selected === piece.name ? "selected-piece" : "";

  return (
    <div
      className={`${styles.pieceDiv} ${styles[selectedStyle]}`}
      onClick={onClick}
      id={piece.name}
      data-testid={piece.name}
    >
      <img
        className={styles.piece}
        src={imgUrl}
        alt={`${colour}${piece.name}`}
      />
      <label>{piece.label}</label>
    </div>
  );
};
