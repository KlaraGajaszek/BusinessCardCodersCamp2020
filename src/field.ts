import Piece from './pieces/piece';

class Field {
    private _piece: Piece | null;
    private _x: number;
    private _y: number;

    constructor(x: number, y: number, piece: Piece | null) {
        this._piece = piece;
        this._x = x;
        this._y = y;
    }

    public get piece() {
        return this._piece;
    }

    public set piece(piece: Piece | null) {
        this._piece = piece;
    }

    public get x() {
        return this._x;
    }

    public set x(x: number) {
        this._x = x;
    }

    public get y() {
        return this._y;
    }

    public set y(y: number) {
        this._y = y;
    }

    public isEmpty(): boolean {
        return this._piece === null;
    }
}

export default Field;