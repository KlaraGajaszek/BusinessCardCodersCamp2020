import Board from '../Board';
import Field from '../field';

export interface BasicPiece {
    x: number;
    y: number;
    side: string;

    move(oldField: Field, newField: Field): void;
    findLegalMoves(board: Board, actualField: Field): string[];
    findAttackingMoves(board: Board, actualField: Field): string[];
}

export default BasicPiece;