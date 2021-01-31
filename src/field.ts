import Bishop from './pieces/Bishop';
import King from './pieces/King';
import Knight from './pieces/Knight';
import Pawn from './pieces/Pawn';
import Piece from './pieces/Piece';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';

class Field {
    piece: Piece | Bishop | King | Pawn | Knight | Queen | Rook | null; // TO DO
    x: number;
    y: number;

    constructor(x: number, y: number, piece: Piece | null) {
        this.piece = piece;
        this.x = x;
        this.y = y;
    }

    public isEmpty(): boolean {
        return this.piece === null;
    }
}

export default Field;