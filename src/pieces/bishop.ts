import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Bishop extends Piece {
  _display: string;

  constructor(side: string) {
    super(side);
    this._display = `<i class="fas fa-chess-bishop ${side}"></i>`;
  }

  findAttackingMoves(board: Board, actualField: Field): string[] {
    const attackingMoves: string[] = [];
    const { x, y } = actualField;

    for (let ru = 1; x - ru >= 0 && y + ru <= 7; ru++) {
      if (board.fields[x - ru][y + ru].piece !== null) {
        attackingMoves.push(`${x - ru},${y + ru}`);
        break;
      }
      attackingMoves.push(`${x - ru},${y + ru}`);
    }

    for (let rd = 1; x + rd <= 7 && y + rd <= 7; rd++) {
      if (board.fields[x + rd][y + rd].piece !== null) {
        attackingMoves.push(`${x + rd},${y + rd}`);
        break;
      }
      attackingMoves.push(`${x + rd},${y + rd}`);
    }

    for (let ld = 1; x + ld <= 7 && y - ld >= 0; ld++) {
      if (board.fields[x + ld][y - ld].piece !== null) {
        attackingMoves.push(`${x + ld},${y - ld}`);
        break;
      }
      attackingMoves.push(`${x + ld},${y - ld}`);
    }

    for (let lu = 1; x - lu >= 0 && y - lu >= 0; lu++) {
      if (board.fields[x - lu][y - lu].piece !== null) {
        attackingMoves.push(`${x - lu},${y - lu}`);
        break;
      }
      attackingMoves.push(`${x - lu},${y - lu}`);
    }

    return attackingMoves;
  }

  findLegalMoves(board: Board, actualField: Field): string[] {
    const attackingMoves: string[] = this.findAttackingMoves(board, actualField);
    const legalMoves: string[] = [];

    for (const move of attackingMoves) {
      const x = Number(move[0]);
      const y = Number(move[2]);

      if (
        (board.fields[x][y].piece !== null && board.fields[x][y].piece!.side !== this.side) ||
        board.fields[x][y].piece === null
      ) {
        legalMoves.push(move);
      }
    }
    return legalMoves;
  }
}

export default Bishop;
