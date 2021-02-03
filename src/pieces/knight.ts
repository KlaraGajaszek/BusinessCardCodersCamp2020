  
import Piece from './Piece';
import Board from '../Board';
import Field from '../Field';

class Knight extends Piece {
    display: string;

    constructor(side: string) {
        super(side);
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const moves = [[2, 1], [1, 2], [-2, 1], [1, -2], [-2, -1], [2, -1], [-1, 2], [-1, -2]];
        const possibleMoves: string[] = new Array();
        const x = actualField.x;
        const y = actualField.y;
        let newX = 0;
        let newY = 0;

        for(const el of moves) {
            newX = x + el[0];
            newY = y + el[1];
            if ( newX <= 7 && newX >= 0 && newY <= 7 && newY >= 0 &&
                board.fields[newX][newY] && board.fields[newX][newY].piece?.side !== this.side){
                    possibleMoves.push(`${newX},${newY}`)
                }
        }

        return possibleMoves;
    } 
    findAttackingMoves(board: Board, actualField: Field): string[] {
        const attackingPossibleMoves: Array<string> = [];
        let possibleMoves = this.findLegalMoves(board, actualField)
        
        for (let i = 0; i < possibleMoves.length; i++) {
            let possibleMovesSplited = possibleMoves[i].split(",")
            const x = parseInt(possibleMovesSplited[0])
            const y = parseInt(possibleMovesSplited[1])
            if(board.fields[x][y].piece?.side !== this.side && board.fields[x][y] !== null){
                attackingPossibleMoves.push(possibleMoves[i])
            }
        }

        return attackingPossibleMoves
    }
}

export default Knight;
