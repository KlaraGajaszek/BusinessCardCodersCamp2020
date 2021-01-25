import Piece from './piece';
import board from '../board';

class Pawn extends Piece {
  constructor(public x: number, public y: number, public side: string, public name: string = 'pawn') {
    super(x, y, side);
    this.name = name;
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }
  // metoda findLegalMoves jak nazwa wskazuje znajduje wszytskie mozliwe ruchy
  findLegalMoves() {
    // possibleMoves to możliwe ruchy któe pinek może wykonać jest ta tablica koordynatów "x,y"
    const possibleMoves: Array<string | null> = [];
    if (this.side === 'white') {
      //this.x wskazuje na aktualna pozycje pionka pozycje liczymy od gornego lewego rogu bordu od 0 
      if (this.x === 6) {
        if (!board[this.x - 2][this.y] && !board[this.x - 1][this.y]) {
          this.x - 2 > 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
        }
      }
      if (this.x - 1 >= 0) {
        if (!board[this.x - 1][this.y]){
          possibleMoves.push(`${this.x - 1},${this.y}`);
        }
        if (board[this.x - 1][this.y - 1] !== null && board[this.x - 1][this.y - 1]?.side === 'black') {
          possibleMoves.push(`${this.x - 1},${this.y - 1}`);
        }
        if (board[this.x - 1][this.y + 1] !== null && board[this.x - 1][this.y + 1]?.side === 'black') {
          possibleMoves.push(`${this.x - 1},${this.y + 1}`);
        }
      }
    } else {
      if (this.x === 1) {
        if (!board[this.x + 2][this.y] && !board[this.x + 1][this.y]) {
          this.x + 2 < 7 && possibleMoves.push(`${this.x + 2},${this.y}`);
        }
      }
      if (this.x + 1 <= 7) {
        if (!board[this.x + 1][this.y]){
          possibleMoves.push(`${this.x + 1},${this.y}`);
        }
        if (board[this.x + 1][this.y - 1] !== null && board[this.x + 1][this.y - 1]?.side === 'white') {
          possibleMoves.push(`${this.x + 1},${this.y - 1}`);
        }
        if (board[this.x + 1][this.y + 1] !== null && board[this.x + 1][this.y + 1]?.side === 'white') {
          possibleMoves.push(`${this.x + 1},${this.y + 1}`);
        }
      }
    }
    return possibleMoves;
  }

  // promote() { }

  // enPassant() 
}

export default Pawn;
