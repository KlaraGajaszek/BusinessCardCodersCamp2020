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

    for (let i = 1; this.x - i > -1 && !board[this.x - i][this.y]; i++) {
      possibleMoves.push(`${this.x - i},${this.y}`);
    }

    for (let i = 1; this.x + i < 8 && !board[this.x + i][this.y]; i++) {
      possibleMoves.push(`${this.x + i},${this.y}`);
    }

    for (let i = 1; this.y - i > -1 && !board[this.x][this.y - i]; i++) {
      possibleMoves.push(`${this.x},${this.y - i}`);
    }

    for (let i = 1; this.y + i < 8 && !board[this.x][this.y + i]; i++) {
      possibleMoves.push(`${this.x},${this.y + i}`);
    }

    return possibleMoves;
  }
}

export default Rook;
