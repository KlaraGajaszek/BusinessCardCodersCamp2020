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

    //RIGHT UP
    for (let i = 1; this.x - i >= 0 && this.y + i <= 7; i++) {
      if(board[this.x-i][this.y+i] && board[this.x-i][this.y+i]?.side !== this.side) {
        possibleMoves.push(`${this.x - i},${this.y + i}`);
        break;
      } else if(board[this.x-i][this.y+i]) {
        break;
      }
      possibleMoves.push(`${this.x - i},${this.y + i}`);
    }

    //RIGHT DOWN
    for (let i = 1; this.x + i <= 7 && this.y + i <= 7; i++) {
      if(board[this.x+i][this.y+i] && board[this.x+i][this.y+i]?.side !== this.side) {
        possibleMoves.push(`${this.x + i},${this.y + i}`);
        break;
      } else if(board[this.x+i][this.y+i]) {
        break;
      }
      possibleMoves.push(`${this.x + i},${this.y + i}`);
    }

    //LEFT DOWN
    for (let i = 1; this.x + i <= 7 && this.y - i >= 0; i++) {
      if(board[this.x+i][this.y-i] && board[this.x+i][this.y-i]?.side !== this.side) {
        possibleMoves.push(`${this.x + i},${this.y - i}`);
        break;
      } else if(board[this.x+i][this.y-i]) {
        break;
      }
      possibleMoves.push(`${this.x + i},${this.y - i}`);
    }

    //LEFT UP
    for (let i = 1; this.x - i >= 0 && this.y - i >= 0; i++) {
      if(board[this.x-i][this.y-i] && board[this.x-i][this.y-i]?.side !== this.side) {
        possibleMoves.push(`${this.x - i},${this.y - i}`);
        break;
      } else if(board[this.x-i][this.y-i]) {
        break;
      }
      possibleMoves.push(`${this.x - i},${this.y - i}`);
    }

    return possibleMoves;
  }
}

export default Bishop;
