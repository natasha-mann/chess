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
        {rows.map((row) => {
          return (
            <tr key={row} className={styles.row}>
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
                  <>
                    {(row === "9" || row === "0") && (
                      <th key={row} className={styles.square}>
                        {col}
                      </th>
                    )}

                    {row !== "9" && row !== "0" && col === " " && (
                      <td className={styles.square} key={row}>
                        {row}
                      </td>
                    )}

                    {row !== "9" && row !== "0" && col !== " " && (
                      <td
                        className={`${styles.square} ${styles[rowType]} ${styles.border} ${selectedStart} ${selectedEnd} `}
                        id={col + row}
                        key={col + row}
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
