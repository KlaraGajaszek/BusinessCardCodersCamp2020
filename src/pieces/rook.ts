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
    const possibleMoves: string[] = new Array();
    const attackingMoves = this.findAttackingMoves(board, actualField);

    for (let move of attackingMoves) possibleMoves.push(move);

    for (let u = 1; u <= 7; u++) {
      if (actualField.y - u < 0) break;
      if (board.fields[actualField.x][actualField.y - u].piece) break;
      else possibleMoves.push(`${actualField.x},${actualField.y - u}`);
    }

    for (let d = 1; d <= 7; d++) {
      if (actualField.y + d > 7) break;
      if (board.fields[actualField.x][actualField.y + d].piece) break;
      else possibleMoves.push(`${actualField.x},${actualField.y + d}`);
    }

    for (let l = 1; l <= 7; l++) {
      if (actualField.x - l < 0) break;
      if (board.fields[actualField.x - l][actualField.y].piece) break;
      else possibleMoves.push(`${actualField.x - l},${actualField.y}`);
    }

    for (let r = 1; r <= 7; r++) {
      if (actualField.x + r > 7) break;
      if (board.fields[actualField.x + r][actualField.y].piece) break;
      else possibleMoves.push(`${actualField.x + r},${actualField.y}`);
    }
    return possibleMoves;
  }

  findAttackingMoves(board: Board, actualField: Field): string[] {
    const attackingMoves: string[] = new Array();

    for (let u = 1; u <= 7; u++) {
      if (actualField.y - u < 0) break;
      if (board.fields[actualField.x][actualField.y - u].piece) {
        if (board.fields[actualField.x][actualField.y - u].piece!.side === actualField.piece!.side) break;
        else {
          attackingMoves.push(`${actualField.x},${actualField.y - u}`);
          break;
        }
      }
    }

    for (let d = 1; d <= 7; d++) {
      if (actualField.y + d > 7) break;
      if (board.fields[actualField.x][actualField.y + d].piece) {
        if (board.fields[actualField.x][actualField.y + d].piece!.side === actualField.piece!.side) break;
        else {
          attackingMoves.push(`${actualField.x},${actualField.y + d}`);
          break;
        }
      }
    }

    for (let l = 1; l <= 7; l++) {
      if (actualField.x - l < 0) break;
      if (board.fields[actualField.x - l][actualField.y].piece) {
        if (board.fields[actualField.x - l][actualField.y].piece!.side === actualField.piece!.side) break;
        else {
          attackingMoves.push(`${actualField.x - l},${actualField.y}`);
          break;
        }
      }
    }

    for (let r = 1; r <= 7; r++) {
      if (actualField.x + r > 7) break;
      if (board.fields[actualField.x + r][actualField.y].piece) {
        if (board.fields[actualField.x + r][actualField.y].piece!.side === actualField.piece!.side) break;
        else {
          attackingMoves.push(`${actualField.x + r},${actualField.y}`);
          break;
        }
      }
    }
    return attackingMoves;
  }
}

export default Rook;
