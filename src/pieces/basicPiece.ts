import Board from '../board';
import Field from '../field';
import PossibleMoves from '../possibleMoves';

export interface BasicPiece {
    move(oldField: Field, newField: Field): void;
    findLegalMoves(board: Board, actualField: Field): PossibleMoves;
}

export default BasicPiece;