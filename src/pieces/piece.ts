import { BasicPiece } from '../types';
import Board from '../board';
import Field from '../field';

abstract class Piece implements BasicPiece {
    abstract display: string;
    hasPieceMoved: boolean;

    constructor(public side: string) {
        this.side = side;
        this.hasPieceMoved = false;
    }

    move(oldField: Field, newField: Field, board: Board): void {
        oldField.piece = null;
        (document.getElementById(`${oldField.x},${oldField.y}`) as HTMLDivElement).innerHTML = '';

        newField.piece = this;
        (document.getElementById(`${newField.x},${newField.y}`) as HTMLDivElement).innerHTML = this.display;
    
        if(!this.hasPieceMoved) this.hasPieceMoved = true;
    }

    abstract findLegalMoves(board: Board, actualField: Field): string[];
    abstract findAttackingMoves(board: Board, actualField: Field): string[];
}

export default Piece;
