# CHESS

This app takes the name of a chess piece, the colour of the piece, its current position on a board and an intended destination and will confirm if the move is valid or not. It assumes that the piece is the only piece on the board.

### Live App

The app is hosted on GitHub pages [here](https://natasha-mann.github.io/chess).

### Run Locally

If you want to run the app locally, clone the repo and install the packages:

```
git clone git@github.com:natasha-mann/chess.git
cd chess
npm i
```

To run the application:

```
npm run start
```

### Tests

There are several unit tests for the functionality of the chess board, located in `src/utils/index.test.tsx` along with React tests for the UI components.

These can be run with:

```
npm run test
```

### Notes:

👉 A standard chess board is arranged with the White pieces occupying rows 1 & 2, Black pieces occupying rows 8 & 7, [like this](https://www.chessset.com/assets/images/No%206-4.jpg)

👉 [Here's](https://elzr.com/blag/img/2018/chess-pieces/chess-moves.png) a handy guide to how each piece can move in a standard game of chess.

👉 Don't forget that a pawn can move 2 squares when starting from its initial row.

### Example:

`canMove("Rook", "A8", "D8")` would return `true`, whereas
`canMove("Queen", "C4", "D6")` would return `false`.
