import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Pawn extends Piece {
    display: string;
    isEnPassantPossible: boolean;

    constructor(side: string) {
        super(side);
        this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
        this.isEnPassantPossible = false;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: string[] = [];
        const { x, y } = actualField;
        if (this.side == 'white') {
            //Two forward white
            if (x === 6 && board.fields[x - 2][y].isEmpty()
             && board.fields[x - 1][y].isEmpty()) {
                 possibleMoves.push(`${x - 2},${y}`);
            }
            //One forward white
            if (x - 1 >= 0 && board.fields[x - 1][y].isEmpty()) {
                possibleMoves.push(`${x - 1},${y}`);
            }
            //Possible attacks white
            if (board.fields[x - 1][y - 1] !== undefined 
                && !board.fields[x - 1][y - 1].isEmpty()
                  && board.fields[x - 1][y - 1].piece?.side === 'black') {
                      possibleMoves.push(`${x - 1},${y - 1}`);
                }
            if (board.fields[x - 1][y + 1] !== undefined
                 && !board.fields[x - 1][y + 1].isEmpty()
                  && board.fields[x - 1][y + 1].piece?.side === 'black') {
                      possibleMoves.push(`${x - 1},${y + 1}`);
                }
            // En passant white
            if (y > 0 && y < 7
                 && board.fields[actualField.x][actualField.y-1].piece instanceof Pawn
                  && board.fields[actualField.x][actualField.y-1].piece?.side !== this.side
                   && (board.fields[actualField.x][actualField.y-1].piece as Pawn).isEnPassantPossible === true) {
                       possibleMoves.push(`${x - 1},${y - 1}`)
            }
            if (y > 0 && y < 7
                 && board.fields[actualField.x][actualField.y+1].piece instanceof Pawn
                  && board.fields[actualField.x][actualField.y+1].piece?.side !== this.side
                   && (board.fields[actualField.x][actualField.y+1].piece as Pawn).isEnPassantPossible === true) {
                       possibleMoves.push(`${x - 1},${y + 1}`)
            }
        } else {
            // Two forward black
            if (x === 1 && board.fields[x + 2][y].isEmpty()
             && board.fields[x + 1][y].isEmpty()) {
                 possibleMoves.push(`${x + 2},${y}`);
            }
            // One forward black
            if (x + 1 <= 7) {
                if (board.fields[x + 1][y].isEmpty()) {
                    possibleMoves.push(`${x + 1},${y}`);
                }
            }
            // Possible attacks black
            if (board.fields[x + 1][y - 1] !== undefined
                && !board.fields[x + 1][y - 1].isEmpty()
                 && board.fields[x + 1][y - 1].piece?.side === 'white') {
                   possibleMoves.push(`${x + 1},${y - 1}`);
               }
           if (board.fields[x + 1][y + 1] !== undefined
                && !board.fields[x + 1][y + 1].isEmpty()
                 && board.fields[x + 1][y + 1].piece?.side === 'white') {
                   possibleMoves.push(`${x + 1},${y + 1}`);
               }
            // En passant black
            if (y > 0 && y < 7
                 && board.fields[actualField.x][actualField.y-1].piece instanceof Pawn
                  && board.fields[actualField.x][actualField.y-1].piece?.side !== this.side
                   && (board.fields[actualField.x][actualField.y-1].piece as Pawn).isEnPassantPossible === true) {
                       possibleMoves.push(`${x + 1},${y - 1}`)
            }
            if (y > 0 && y < 7
                 && board.fields[actualField.x][actualField.y+1].piece instanceof Pawn
                  && board.fields[actualField.x][actualField.y+1].piece?.side !== this.side
                   && (board.fields[actualField.x][actualField.y+1].piece as Pawn).isEnPassantPossible === true) {
                       possibleMoves.push(`${x + 1},${y + 1}`)
            }
        }
        return possibleMoves;
    }

    findAttackingMoves(board: Board, actualField: Field): string[] {
        const attackingMoves: string[] = [];
        const { x, y } = actualField;

        if (this.side === 'white') {
            if (board.fields[x - 1][y - 1] !== undefined 
                && !board.fields[x - 1][y - 1].isEmpty()
                  && board.fields[x - 1][y - 1].piece?.side === 'black') {
                    attackingMoves.push(`${x - 1},${y - 1}`);
                }
            if (board.fields[x - 1][y + 1] !== undefined
                 && !board.fields[x - 1][y + 1].isEmpty()
                  && board.fields[x - 1][y + 1].piece?.side === 'black') {
                    attackingMoves.push(`${x - 1},${y + 1}`);
                }
        } else {
            if (board.fields[x + 1][y - 1] !== undefined
                 && !board.fields[x + 1][y - 1].isEmpty()
                  && board.fields[x + 1][y - 1].piece?.side === 'white') {
                    attackingMoves.push(`${x + 1},${y - 1}`);
                }
            if (board.fields[x + 1][y + 1] !== undefined
                 && !board.fields[x + 1][y + 1].isEmpty()
                  && board.fields[x + 1][y + 1].piece?.side === 'white') {
                    attackingMoves.push(`${x + 1},${y + 1}`);
                }
        }
        return attackingMoves;
    }

    move(oldField: Field, newField: Field, board: Board): void {
      super.move(oldField, newField, board);
      if (this.isEnPassantPossible === true){
        this.isEnPassantPossible = false;
      } else {
        if(Math.abs(newField.x - oldField.x) === 2){
          this.isEnPassantPossible = true;
        }
      }
      if(Math.abs(oldField.x - newField.x) === 1 && (Math.abs(oldField.y - newField.y) === 1)) {
        const x = oldField.x;
        const y = newField.y;
        board.fields[x][y].piece = null;
        (document.getElementById(`${x},${y}`) as HTMLDivElement).innerHTML = '';
      }
    }
}

export default Pawn;
