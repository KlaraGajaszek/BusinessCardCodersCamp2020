import Piece from './pieces/piece';
import { xCoords } from './types';

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

    getFieldNotation() {
        return `${xCoords[this.y]}${Math.abs(this.x - 8)}`;
    }
}

export default Field;
