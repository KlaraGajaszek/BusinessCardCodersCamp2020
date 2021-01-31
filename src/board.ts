import Field from './field';
import Pawn from './pieces/Pawn';
import Rook from './pieces/Rook';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';

class Board {
    readonly boardSize: number = 8;

    field: any;

    constructor() {
        this.field = new Array(this.boardSize);
        for (let i = 0; i < 8; i++) {
            this.field[i] = new Array(this.boardSize);
        }
    }

    public getField(x: number, y: number): Field {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            throw new Error('Index out of bound');
        }
        return this.field[x][y];
    }

    public initBoard(): void {
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
            this.field[1][i] = new Pawn(1, i, 'black');
            this.field[6][i] = new Pawn(6, i, 'white');
        }
    }

    private initRooks(): void {
        this.field[0][0] = new Rook(0, 0, 'black');
        this.field[0][7] = new Rook(0, 7, 'black');
        this.field[7][0] = new Rook(7, 0,'white');
        this.field[7][7] = new Rook(7, 7, 'white');
    }

    private initKnights(): void {
        this.field[0][1] = new Knight(0, 1, 'black');
        this.field[0][6] = new Knight(0, 6, 'black');
        this.field[7][1] = new Knight(7, 1, 'white');
        this.field[7][6] = new Knight(7, 6, 'white');
    }

    private initBishops(): void {
        this.field[0][2] = new Bishop(0, 2, 'black');
        this.field[0][5] = new Bishop(0, 5, 'black');
        this.field[7][2] = new Bishop(7, 2, 'white');
        this.field[7][5] = new Bishop(7, 5, 'white');
    }

    private initQueens(): void {
        this.field[0][3] = new Queen(0, 3, 'black');
        this.field[7][3] = new Queen(7, 3, 'white');
    }

    private initKings(): void {
        this.field[0][4] = new King(0, 4, 'black');
        this.field[7][4] = new King(7, 4, 'white');
    }

    private initEmptyFields(): void {
        for (let i = 0; i < this.boardSize; i++) {
            if (i !== 0 && i !== 1 && i !== 6 && i !== 7) {
                for (let j = 0; j < this.boardSize; j++) {
                    this.field[i][j] = null
                }
            }
        }
    }
}

export default Board;