import Piece from './Piece';
import Board from '../Board';
import Field from '../field';

class Pawn extends Piece {
  display: string;
  side: string;
  x: number;
  y: number;

  constructor(x: number, y: number, side: string) {
    super(x, y, side);
    this.side = side;
    this.x = x;
    this.y = y;
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves(board: Board, actualField: Field): string[] {
    const possibleMoves: Array<string> = new Array();
    if (this.side == 'white') {
      actualField.x - 1 > 0 && possibleMoves.push(`${actualField.x - 1},${actualField.y}`);
      actualField.x - 2 > 0 && possibleMoves.push(`${actualField.x - 2},${actualField.y}`);
    }
    return possibleMoves;
  }

  findAttackingMoves(board: Board, actualField: Field): string[] {
    const attackingMoves: string[] = new Array();

    return attackingMoves;
  }

  // promote() { }
  // enPassant() { }
}

export default Pawn;
