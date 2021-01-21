import Piece from './piece';

class Bishop extends Piece {
  constructor(public x: number, public y: number, public side: string) {
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
