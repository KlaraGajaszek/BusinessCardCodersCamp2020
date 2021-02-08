import Board from './board';
import Field from './field';

export interface BasicPiece {
    move(oldField: Field, newField: Field): void;
    findLegalMoves(board: Board, actualField: Field): string[];
    findAttackingMoves(board: Board, actualField: Field): string[];
}

export enum xCoords {
    a, b, c, d, e, f, g, h
}
