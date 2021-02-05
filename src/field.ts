import Piece from './pieces/piece';

class Field {
    piece: Piece | null;
    x: number;
    y: number;

    constructor(x: number, y: number, piece: Piece | null) {
        this.piece = piece;
        this.x = x;
        this.y = y;
    }

    isEmpty(): boolean {
        return this.piece === null;
    }
}

export default Field;
