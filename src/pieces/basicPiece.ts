import Board from '../board';
import Field from '../field';

export interface BasicPiece {
    move(oldField: Field, newField: Field): void;
    findLegalMoves(board: Board, actualField: Field): string[];
}

export default BasicPiece;