import { BasicPiece } from '../types';
import Board from '../board';
import Field from '../field';

abstract class Piece implements BasicPiece {
    abstract display: string;

    constructor(public side: string) {
        this.side = side;
    }

    move(oldField: Field, newField: Field): void {
        oldField.piece = null;
        (document.getElementById(`${oldField.x},${oldField.y}`) as HTMLDivElement).innerHTML = '';

        newField.piece = this;
        this.render(newField)
    }
    render(newField: Field) {
        (document.getElementById(`${newField.x},${newField.y}`) as HTMLDivElement).innerHTML = this.display;
    }

    abstract findLegalMoves(board: Board, actualField: Field): string[];
    abstract findAttackingMoves(board: Board, actualField: Field): string[];
}

export default Piece;
