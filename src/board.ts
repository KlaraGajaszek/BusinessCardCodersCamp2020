import Field from './field';
import Pawn from './pieces/pawn';

class Board {
    readonly boardSize: number = 8;

    private _fields: Field[][];

    constructor() {
        this._fields = new Array(this.boardSize);
        for (let i = 0; i < 8; i++) {
            this._fields[i] = new Array(this.boardSize);
        }
    }

    public get fields(): Field[][] {
        return this._fields;
    }

    public getField(x: number, y: number): Field {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            throw new Error('Index out of bound');
        }
        return this.fields[x][y];
    }

    public initBoard(): void {
        this.initPawns();
        this.initEmptyFields();
    }

    private initPawns(): void {
        for (let i = 0; i < this.boardSize; i++) {
            this._fields[1][i] = new Field(1, i, new Pawn('black'));
            this._fields[6][i] = new Field(6, i, new Pawn('white'));
        }
    }

    private initEmptyFields(): void {
        for (let i = 0; i < this.boardSize; i++) {
            if (i !== 1 && i !== 6) {
                for (let j = 0; j < this.boardSize; j++) {
                    this._fields[i][j] = new Field(i, j, null);
                }
            }
        }
    }
}

export default Board;