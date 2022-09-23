import { ValidMove } from "../App";
import styles from "./chess.module.css";
import { ChessSquare } from "./ChessSquare";
import { v4 as uuidv4 } from "uuid";

interface ChessBoardProps {
  handleSelectSquare: (e: React.MouseEvent<HTMLElement>) => void;
  startSquare: string;
  endSquare: string;
  validMove: ValidMove;
  imageClass: string;
}

export const ChessBoard = ({
  handleSelectSquare,
  startSquare,
  endSquare,
  validMove,
  imageClass,
}: ChessBoardProps) => {
  const columns = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "];
  const rows = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const valid = validMove === ValidMove.true ? true : false;

  return (
    <table className={styles.table}>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={uuidv4()} className={styles.row}>
              {columns.map((col) => {
                const rowType = parseInt(row) % 2 === 0 ? "even" : "odd";

                const selectedStart =
                  startSquare === col + row && valid
                    ? styles.selectedStartValid
                    : startSquare === col + row
                    ? `${styles[imageClass]} ${styles.backgroundImg}`
                    : "";

                const selectedEnd =
                  endSquare === col + row && valid
                    ? `${styles[imageClass]} ${styles.backgroundImg}`
                    : endSquare === col + row
                    ? styles.selectedEnd
                    : "";

                return (
                  <ChessSquare
                    rowType={rowType}
                    selectedStart={selectedStart}
                    selectedEnd={selectedEnd}
                    row={row}
                    col={col}
                    handleSelectSquare={handleSelectSquare}
                    key={uuidv4()}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
