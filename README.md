# CHESS

The task this week is to create a function which takes the name of a chess piece, its position on a board and an intended destination. The function should return true if the piece can move to the destination, or false if it can't. You can assume that the piece is the only piece on the board and that it is a White piece.

### Rewards:

4️⃣ Points are awarded for a working algorithm capable of validating these sample moves.

3️⃣ Further points are awarded for illustrating the movement with a simple user interface.

2️⃣ Further points are awarded for providing at least one unit test.

1️⃣ Further point is awarded for providing support for the Black pieces (your function should accept an additional 'colour' parameter).

### Notes:

👉 A standard chess board is arranged with the White pieces occupying rows 1 & 2, Black pieces occupying rows 8 & 7, [like this](https://www.chessset.com/assets/images/No%206-4.jpg)

👉 [Here's](https://elzr.com/blag/img/2018/chess-pieces/chess-moves.png) a handy guide to how each piece can move in a standard game of chess.

👉 Don't forget that a pawn can move 2 squares when starting from its initial row.

### Example:

`canMove("Rook", "A8", "D8")` would return `true`, whereas
`canMove("Queen", "C4", "D6")` would return `false`.
