import styles from "./chess.module.css";

interface ChessSquareProps {
  rowType: string;
  selectedStart: string;
  selectedEnd: string;
  row: string;
  col: string;
  handleSelectSquare: (e: React.MouseEvent<HTMLElement>) => void;
}

export const ChessSquare = ({
  rowType,
  selectedStart,
  selectedEnd,
  row,
  col,
  handleSelectSquare,
}: ChessSquareProps) => {
  const label = row === "9" || row === "0" ? col : row;
  const hasLabel = row === "9" || row === "0" || col === " ";

  return (
    <>
      {hasLabel && <th className={styles.square}>{label}</th>}

      {!hasLabel && (
        <td
          className={`${styles.square} ${styles[rowType]} ${styles.border} ${selectedStart} ${selectedEnd} `}
          id={col + row}
          data-testid={col + row}
          onClick={handleSelectSquare}
        >
          {selectedStart === "selectedStartValid" && "START"}
        </td>
      )}
    </>
  );
};
