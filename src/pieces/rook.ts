import Piece from './piece';
import { Field } from '../types';

class Rook extends Piece {
  constructor(x: number, y: number, readonly side: string) {
    super(x, y, side);
    // this.name = name;
    this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
  }

  findLegalMoves(board: Field[][]): string[] {
    const possibleMoves: Array<string> = [];

    for (let i = 1; this.x - i > -1; i++) {
      if (!board[this.x - i][this.y]) {
        possibleMoves.push(`${this.x - i},${this.y}`);
      } else if (board[this.x - i][this.y]?.side !== this.side) {
        possibleMoves.push(`${this.x - i},${this.y}`);
        break;
      } else break;
    }

    for (let i = 1; this.x + i < 8; i++) {
      if (!board[this.x + i][this.y]) {
        possibleMoves.push(`${this.x + i},${this.y}`);
      } else if (board[this.x + i][this.y]?.side !== this.side) {
        possibleMoves.push(`${this.x + i},${this.y}`);
        break;
      } else break;
    }

    for (let i = 1; this.y - i > -1; i++) {
      if (!board[this.x][this.y - i]) {
        possibleMoves.push(`${this.x},${this.y - i}`);
      } else if (board[this.x][this.y - i]?.side !== this.side) {
        possibleMoves.push(`${this.x},${this.y - i}`);
        break;
      } else break;
    }

    for (let i = 1; this.y + i < 8; i++) {
      if (!board[this.x][this.y + i]) {
        possibleMoves.push(`${this.x},${this.y + i}`);
      } else if (board[this.x][this.y + i]?.side !== this.side) {
        possibleMoves.push(`${this.x},${this.y + i}`);
        break;
      } else break;
    }
    return possibleMoves;
  }

  findAttackingMoves(board: Field[][]): string[] {
    const attackingMoves: Array<string> = [];
    let possibleMoves = this.findLegalMoves(board);
    for (let i = 0; i < possibleMoves.length; i++) {
      let move = possibleMoves[i].split(',');
      const x = parseInt(move[0]);
      const y = parseInt(move[1]);
      if (board[x][y] && board[x][y]?.side !== this.side) {
        attackingMoves.push(possibleMoves[i]);
      }
    }
    return attackingMoves;
  }
}

export default Rook;
