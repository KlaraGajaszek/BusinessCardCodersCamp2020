import Piece from './piece';
import { Field } from '../types'


class Knight extends Piece {
    constructor(x: number, y: number, readonly side: string) {
        super(x, y, side);
        // this.name = name;
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
    }

    findLegalMoves(board: Field[][]): string[] {
        const moves = [[2, 1], [1, 2], [-2, 1], [1, -2], [-2, -1], [2, -1], [-1, 2], [-1, -2]];
        const possibleMoves: Array<string> = [];
        let newX = 0;
        let newY = 0;

        for(const el of moves) {
            newX = this.x + el[0];
            newY = this.y + el[1];
            if ( newX <= 7 && newX >= 0 && newY <= 7 && newY >= 0){
                if(board[newX][newY] || board[newX][newY]?.side !== this.side) {
                        possibleMoves.push(`${newX},${newY}`)
                }
            }
        }

        return possibleMoves;
    } 

    findAttackingMoves(board: Field[][]) {
        const attackingPossibleMoves: Array<string> = [];
        let possibleMoves = this.findLegalMoves(board)
        
        for (let i = 0; i < possibleMoves.length; i++) {
            let possibleMovesSplited = possibleMoves[i].split(",")
            const x = parseInt(possibleMovesSplited[0])
            const y = parseInt(possibleMovesSplited[1])
            if(board[x][y]?.side !== this.side && board[x][y] !== null){
                attackingPossibleMoves.push(possibleMoves[i])
            }
        }

        return attackingPossibleMoves
    }
}

export default Knight;
