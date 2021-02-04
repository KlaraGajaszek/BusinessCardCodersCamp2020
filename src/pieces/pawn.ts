import Piece from './Piece';
import Board from '../Board';
import Field from '../Field';

class Pawn extends Piece {
  display: string;

  constructor(side: string) {
    super(side);
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves(board: Board, actualField: Field): string[] {
    const possibleMoves: Array<string> = new Array();
    const x = actualField.x;
    const y = actualField.y;
    if (this.side == 'white') {
      //Two forward white
      if (x === 6) {
        if (board.fields[x - 2][y].isEmpty() && board.fields[x - 1][y].isEmpty()) {
          possibleMoves.push(`${x - 2},${y}`);
        }
      }
      //One forward white
      if (x - 1 >= 0) {
        if (board.fields[x - 1][y].isEmpty()) {
          possibleMoves.push(`${x - 1},${y}`);
        }
      }
    } else {
      // Two forward black
      if (x === 1) {
        if (board.fields[x + 2][y].isEmpty() && board.fields[x + 1][y].isEmpty()) {
          possibleMoves.push(`${x + 2},${y}`);
        }
      }
      // One forward black
      if (x + 1 <= 7) {
        if (board.fields[x + 1][y].isEmpty()) {
          possibleMoves.push(`${x + 1},${y}`);
        }
      }
    }
    return possibleMoves;
  }

  findAttackingMoves(board: Board, actualField: Field): string[] {
    const attackingMoves: Array<string> = new Array();
    const x = actualField.x;
    const y = actualField.y;

    if (this.side = 'white') {
      if (board.fields[x - 1][y - 1] !== undefined) {
        if (!board.fields[x - 1][y - 1].isEmpty() && board.fields[x - 1][y - 1].piece?.side === 'black') {
          attackingMoves.push(`${x - 1},${y - 1}`);

          }

      }
      if (board.fields[x - 1][y + 1] !== undefined) {
        if (!board.fields[x - 1][y + 1].isEmpty() && board.fields[x - 1][y + 1].piece?.side === 'black') {
          attackingMoves.push(`${x - 1},${y + 1}`);
        }
      }
    } else {
      if (board.fields[x + 1][y - 1] !== undefined) {
        if (!board.fields[x + 1][y - 1].isEmpty() && board.fields[x + 1][y - 1].piece?.side === 'white') {
          attackingMoves.push(`${x + 1},${y - 1}`);

          }

      }
      if (board.fields[x + 1][y + 1] !== undefined) {
        if (!board.fields[x + 1][y + 1].isEmpty() && board.fields[x + 1][y + 1].piece?.side === 'white') {
          attackingMoves.push(`${x + 1},${y + 1}`);
        }
      }
    }
    return attackingMoves;
  }
}

export default Pawn;