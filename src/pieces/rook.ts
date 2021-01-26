import Piece from './piece';

class Rook extends Piece {
  constructor(x: number, y: number, protected side: string) {
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
