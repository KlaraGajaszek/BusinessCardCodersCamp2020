import Piece from './piece';
import board from '../board';

class Pawn extends Piece {
  constructor(public x: number, public y: number, public side: string, public name: string = 'pawn') {
    super(x, y, side);
    this.name = name;
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }
  
  findLegalMoves() {
    const possibleMoves: Array<string | null> = [];

    if (this.side === 'white') {
      // Two forward
      if (this.x === 6) {
        if (!board[this.x - 2][this.y] && !board[this.x - 1][this.y]) {
          this.x - 2 > 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
        }
      }
      // One forward 
      if (this.x - 1 >= 0) {
        if (!board[this.x - 1][this.y]){
          possibleMoves.push(`${this.x - 1},${this.y}`);
        }
      }
    } else {
      // Two forward
      if (this.x === 1) {
        if (!board[this.x + 2][this.y] && !board[this.x + 1][this.y]) {
          this.x + 2 < 7 && possibleMoves.push(`${this.x + 2},${this.y}`);
        }
      }
      // One forward
      if (this.x + 1 <= 7) {
        if (!board[this.x + 1][this.y]){
          possibleMoves.push(`${this.x + 1},${this.y}`);
        }
      }
    }
    return possibleMoves;
  }

  findAttackingMoves() {
    const attackingMoves: Array<string | null> = [];

    if (this.side = 'white') {
      if (board[this.x - 1][this.y - 1] !== null && board[this.x - 1][this.y - 1]?.side === 'black') {
        attackingMoves.push(`${this.x - 1},${this.y - 1}`);
      }
      if (board[this.x - 1][this.y + 1] !== null && board[this.x - 1][this.y + 1]?.side === 'black') {
        attackingMoves.push(`${this.x - 1},${this.y + 1}`);
      }
    } else {
      if (board[this.x + 1][this.y - 1] !== null && board[this.x + 1][this.y - 1]?.side === 'white') {
        attackingMoves.push(`${this.x + 1},${this.y - 1}`);
      }
      if (board[this.x + 1][this.y + 1] !== null && board[this.x + 1][this.y + 1]?.side === 'white') {
        attackingMoves.push(`${this.x + 1},${this.y + 1}`);
      }
    }
    return attackingMoves;
  }

  // promote() { }
  // enPassant() { }
}

export default Pawn;