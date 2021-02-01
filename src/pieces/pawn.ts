import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Pawn extends Piece {
  _display: string;

  constructor(protected side: string) {
    super(side);
    this._display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves(board: Board, actualField: Field): string[] {
    const possibleMoves: Array<string> = new Array();
    if (this.side == 'white') {
      //this.x wskazuje na aktualna pozycje pionka pozycje liczymy od gornego lewego rogu bordu od 0 
      actualField.x - 1 > 0 && possibleMoves.push(`${actualField.x - 1},${actualField.y}`);
      actualField.x - 2 > 0 && possibleMoves.push(`${actualField.x - 2},${actualField.y}`);
    }
    console.log(possibleMoves)
    return possibleMoves;
  }

  // promote() { }
  // enPassant() { }
}

export default Pawn;
