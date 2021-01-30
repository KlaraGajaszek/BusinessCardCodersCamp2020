import Piece from '../piece';
import { Field } from '../../types'

class Bishop extends Piece {
  constructor(x: number, y: number, side: string) {
    super(x, y, side);
    // this.name = name;
    this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
  }

  findLegalMoves(board: Field[][]): string[] {
    const possibleMoves: string[] = [];

    for (let ru = 1; this.x - ru >= 0 && this.y + ru <= 7; ru++) {
      if(board[this.x-ru][this.y+ru] && board[this.x-ru][this.y+ru]?.side !== this.side) {
        possibleMoves.push(`${this.x - ru},${this.y + ru}`);
        break;
      } else if(board[this.x-ru][this.y+ru]) {
        break;
      }
      possibleMoves.push(`${this.x - ru},${this.y + ru}`);
    }

    for (let rd = 1; this.x + rd <= 7 && this.y + rd <= 7; rd++) {
      if(board[this.x+rd][this.y+rd] && board[this.x+rd][this.y+rd]?.side !== this.side) {
        possibleMoves.push(`${this.x + rd},${this.y + rd}`);
        break;
      } else if(board[this.x+rd][this.y+rd]) {
        break;
      }
      possibleMoves.push(`${this.x + rd},${this.y + rd}`);
    }

    for (let ld = 1; this.x + ld <= 7 && this.y - ld >= 0; ld++) {
      if(board[this.x+ld][this.y-ld] && board[this.x+ld][this.y-ld]?.side !== this.side) {
        possibleMoves.push(`${this.x + ld},${this.y - ld}`);
        break;
      } else if(board[this.x+ld][this.y-ld]) {
        break;
      }
      possibleMoves.push(`${this.x + ld},${this.y - ld}`);
    }

    for (let lu = 1; this.x - lu >= 0 && this.y - lu >= 0; lu++) {
      if(board[this.x-lu][this.y-lu] && board[this.x-lu][this.y-lu]?.side !== this.side) {
        possibleMoves.push(`${this.x - lu},${this.y - lu}`);
        break;
      } else if(board[this.x-lu][this.y-lu]) {
        break;
      }
      possibleMoves.push(`${this.x - lu},${this.y - lu}`);
    }

    return possibleMoves;
  }
}

export default Bishop;
