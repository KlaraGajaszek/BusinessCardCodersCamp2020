import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Rook extends Piece {
  _display: string;

  constructor(side: string) {
    super(side);
    this._display = `<i class="fas fa-chess-rook ${side}"></i>`;
  }

  findLegalMoves(board: Board, actualField: Field): string[] {
    const possibleMoves = [];
    const attackingMoves = this.findAttackingMoves(board, actualField);

    for (let move of attackingMoves) {
      const splitedMove = move.split(',');
      const x = parseInt(splitedMove[0]);
      const y = parseInt(splitedMove[1]);
      if (board.fields[x][y].piece && board.fields[x][y].piece!.side === actualField.piece!.side) continue;
      possibleMoves.push(move);
    }
    return possibleMoves;
  }

  findAttackingMoves(board: Board, actualField: Field): string[] {
    const attackingMoves = [];

    for (let u = 1; u <= 7; u++) {
      if (actualField.y - u < 0) break;
      if (board.fields[actualField.x][actualField.y - u].piece) {
        attackingMoves.push(`${actualField.x},${actualField.y - u}`);
        break;
      }
      attackingMoves.push(`${actualField.x},${actualField.y - u}`);
    }

    for (let d = 1; d <= 7; d++) {
      if (actualField.y + d > 7) break;
      if (board.fields[actualField.x][actualField.y + d].piece) {
        attackingMoves.push(`${actualField.x},${actualField.y + d}`);
        break;
      }
      attackingMoves.push(`${actualField.x},${actualField.y + d}`);
    }

    for (let l = 1; l <= 7; l++) {
      if (actualField.x - l < 0) break;
      if (board.fields[actualField.x - l][actualField.y].piece) {
        attackingMoves.push(`${actualField.x - l},${actualField.y}`);
        break;
      }
      attackingMoves.push(`${actualField.x - l},${actualField.y}`);
    }

    for (let r = 1; r <= 7; r++) {
      if (actualField.x + r > 7) break;
      if (board.fields[actualField.x + r][actualField.y].piece) {
        attackingMoves.push(`${actualField.x + r},${actualField.y}`);
        break;
      }
      attackingMoves.push(`${actualField.x + r},${actualField.y}`);
    }
    return attackingMoves;
  }
}

export default Rook;
