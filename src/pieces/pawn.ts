import Piece from './piece';
import Board from '../board';

class Pawn extends Piece {
  _display: string;

  constructor(protected side: string) {
    super(side);
    this._display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves(board: Board, x: number, y: number): string[] {
    const possibleMoves: Array<string> = new Array();
    if (this.side == 'white') {
      //this.x wskazuje na aktualna pozycje pionka pozycje liczymy od gornego lewego rogu bordu od 0 
      x - 1 > 0 && possibleMoves.push(`${x - 1},${y}`);
      x - 2 > 0 && possibleMoves.push(`${x - 2},${y}`);
    }
    return possibleMoves;
  }
  // // metoda findLegalMoves jak nazwa wskazuje znajduje wszytskie mozliwe ruchy
  // findLegalMoves() {
  //   // possibleMoves to możliwe ruchy któe pinek może wykonać jest ta tablica koordynatów "x,y"
  //   const possibleMoves: Array<string | null> = [];
  //   if (this.side == 'white') {
  //     //this.x wskazuje na aktualna pozycje pionka pozycje liczymy od gornego lewego rogu bordu od 0 
  //     this.x - 1 > 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
  //     this.x - 2 > 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
  //   }
  //   return possibleMoves;
  // }

  // promote() { }
  // enPassant() { }
}

export default Pawn;
