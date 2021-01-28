import Piece from './piece';
import { Field } from '../types'



class Knight extends Piece {
    constructor(x: number, y: number, readonly side: string) {
        super(x, y, side);
        // this.name = name;
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
    }
    findLegalMoves(board: Field[][]): string[] {
        const possibleMoves: Array<string> = [];

        if (this.x+1 <=7 && this.x+1 >= 0 && this.y+2 <= 7 && this.y+2 >= 0) {
            if (board[this.x+1][this.y+2] === null || board[this.x+1][this.y+2]?.side !== this.side) {
                possibleMoves.push(`${this.x+1},${this.y+2}`)
            }
        }
        if (this.x+2 <=7 && this.x+2 >= 0 && this.y+1 <= 7 && this.y+1 >= 0) {
            if (board[this.x+2][this.y+1] === null || board[this.x+2][this.y+1]?.side !== this.side ){
            possibleMoves.push(`${this.x+2},${this.y+1}`)
            }
        }
        if (this.x+2 <=7 && this.x+2 >= 0 && this.y-1 <= 7 && this.y-1 >= 0) {
            if (board[this.x+2][this.y-1] === null || board[this.x+2][this.y-1]?.side !== this.side ){
                possibleMoves.push(`${this.x+2},${this.y-1}`)
            }
            
        }
        if (this.x+1 <=7 && this.x+1 >= 0 && this.y-2 <= 7 && this.y-2 >= 0) {
            if (board[this.x+1][this.y-2] === null || board[this.x+1][this.y-2]?.side !== this.side ){
                possibleMoves.push(`${this.x+1},${this.y-2}`)
            }
        }
        if (this.x-1 <=7 && this.x-1 >= 0 && this.y-2 <= 7 && this.y-2 >= 0) {
            if (board[this.x-1][this.y-2] === null || board[this.x-1][this.y-2]?.side !== this.side ){
                possibleMoves.push(`${this.x-1},${this.y-2}`)
            }
        }
        if (this.x-2 <=7 && this.x-2 >= 0 && this.y-1 <= 7 && this.y-1 >= 0) {
            if (board[this.x-2][this.y-1] === null || board[this.x-2][this.y-1]?.side !== this.side ){
                possibleMoves.push(`${this.x-2},${this.y-1}`)
            }
        }
        if (this.x-2 <=7 && this.x-2 >= 0 && this.y+1 <= 7 && this.y+1 >= 0) {
            if (board[this.x-2][this.y+1] === null || board[this.x-2][this.y+1]?.side !== this.side ){
                possibleMoves.push(`${this.x-2},${this.y+1}`)
            }
        }
        if (this.x-1 <=7 && this.x-1 >= 0 && this.y+2 <= 7 && this.y+2 >= 0) {
            if (board[this.x-1][this.y+2] === null || board[this.x-1][this.y+2]?.side !== this.side ){
                possibleMoves.push(`${this.x-1},${this.y+2}`)
            }  
        } 
        return possibleMoves;
    }
    findAttackingMoves() {
        const attackingPossibleMoves: Array<string> = [];
        let possibleMoves = this.findLegalMoves()
        for (let i = 0; i < possibleMoves.length; i++){
            if(board[possibleMoves[i][0]][possibleMoves[i][1]].side !== this.side && board[possibleMoves[i][0]][possibleMoves[i][1]] !== null){
                attackingPossibleMoves.push(possibleMoves[i])
            }
        }
        return attackingPossibleMoves

    }
}

export default Knight;
