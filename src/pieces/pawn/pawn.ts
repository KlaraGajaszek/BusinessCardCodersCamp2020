import Piece from '../piece';

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
    if (this.side == 'white') {
      //this.x wskazuje na aktualna pozycje pionka pozycje liczymy od gornego lewego rogu bordu od 0 
      this.x - 1 > 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
      this.x - 2 > 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
    }
    return possibleMoves;
  }

  // promote() { }
  // enPassant() { }
}

export default Pawn;
