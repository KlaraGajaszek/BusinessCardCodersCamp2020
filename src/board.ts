import Field from './Field';
import Pawn from './pieces/Pawn';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';

class Board {
    readonly boardSize: number = 8;

    fields: Field[][];

    constructor() {
        this.fields = new Array(this.boardSize);
        for (let i = 0; i < 8; i++) {
            this.fields[i] = new Array(this.boardSize);
        }
    }

    getField(x: number, y: number): Field {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            throw new Error('Index out of bound');
        }
        return this.fields[x][y];
    }

    initBoard(): void {
        this.initPawns();
        this.initRooks();
        this.initKnights();
        this.initBishops();
        this.initQueens();
        this.initKings();
        this.initEmptyFields();
    }

    private initPawns(): void {
        for (let i = 0; i < this.boardSize; i++) {
            this.fields[1][i] = new Field(1, i, new Pawn('black'));
            this.fields[6][i] = new Field(6, i, new Pawn('white'));
        }
    }

    private initRooks(): void {
        this.fields[0][0] = new Field(0, 0, new Rook('black'));
        this.fields[0][7] = new Field(0, 7, new Rook('black'));
        this.fields[7][0] = new Field(7, 0, new Rook('white'));
        this.fields[7][7] = new Field(7, 7, new Rook('white'));
    }

    private initKnights(): void {
        this.fields[0][1] = new Field(0, 1, new Knight('black'));
        this.fields[0][6] = new Field(0, 6, new Knight('black'));
        this.fields[7][1] = new Field(7, 1, new Knight('white'));
        this.fields[7][6] = new Field(7, 6, new Knight('white'));
    }

    private initBishops(): void {
        this.fields[0][2] = new Field(0, 2, new Bishop('black'));
        this.fields[0][5] = new Field(0, 5, new Bishop('black'));
        this.fields[7][2] = new Field(7, 2, new Bishop('white'));
        this.fields[7][5] = new Field(7, 5, new Bishop('white'));
    }

    private initQueens(): void {
        this.fields[0][3] = new Field(0, 3, new Queen('black'));
        this.fields[7][3] = new Field(7, 3, new Queen('white'));
    }

    private initKings(): void {
        this.fields[0][4] = new Field(0, 4, new King('black'));
        this.fields[7][4] = new Field(7, 4, new King('white'));
    }

    private initEmptyFields(): void {
        for (let i = 0; i < this.boardSize; i++) {
            if (i !== 0 && i !== 1 && i !== 6 && i !== 7) {
                for (let j = 0; j < this.boardSize; j++) {
                    this.fields[i][j] = new Field(i, j, null);
                }
            }
        }
    }
}

export default Board;
