import { ValidMove } from "../App";
import styles from "./chessboard.module.css";

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
        {rows.map((row, index) => {
          return (
            <tr key={`${row}${index}`} className={styles.row}>
              {columns.map((col, i) => {
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
                  <>
                    {(row === "9" || row === "0") && (
                      <th key={`${index}${row}${i}`} className={styles.square}>
                        {col}
                      </th>
                    )}

                    {row !== "9" && row !== "0" && col === " " && (
                      <td className={styles.square} key={`${row}${i}${index}`}>
                        {row}
                      </td>
                    )}

                    {row !== "9" && row !== "0" && col !== " " && (
                      <td
                        className={`${styles.square} ${styles[rowType]} ${styles.border} ${selectedStart} ${selectedEnd} `}
                        id={col + row}
                        data-testid={col + row}
                        key={`${row}${i}${col}`}
                        onClick={handleSelectSquare}
                      >
                        {selectedStart === "selectedStartValid" && "START"}
                      </td>
                    )}
                  </>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
