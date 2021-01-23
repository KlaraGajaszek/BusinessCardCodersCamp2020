import Piece from './piece';

class King extends Piece {
  constructor(public x: number, public y: number, protected side: string) {
    super(x, y, side);
    // this.name = name;
    this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king
  }
  // findLegalMoves() {
  //     const possibleMoves = [];

  //     return possibleMoves;
  // }
}

export default King;
