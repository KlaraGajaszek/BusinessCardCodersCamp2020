import Piece from './piece';

class Rook extends Piece {
  constructor(public x: number, public y: number, public side: string) {
    super(x, y, side);
    // this.name = name;
    this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
  }
  // findLegalMoves() {
  //     const possibleMoves = [];

  //     return possibleMoves;
  // }
}

export default Rook;
