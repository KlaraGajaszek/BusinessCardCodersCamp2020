import Piece from './piece';

class Bishop extends Piece {
  constructor(x: number, y: number, protected side: string) {
    super(x, y, side);
    // this.name = name;
    this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
  }
  // findLegalMoves() {
  //   const possibleMoves = [];

  //   return possibleMoves;
  // }
}

export default Bishop;
