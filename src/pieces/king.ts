import Piece from './piece';

class King extends Piece {
  constructor(x: number, y: umber, side: string) {
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
