import Board from './Board';
import Field from './Field';

export interface BasicPiece {
    move(oldField: Field, newField: Field): void;
    findLegalMoves(board: Board, actualField: Field): string[];
    findAttackingMoves(board: Board, actualField: Field): string[];
}
