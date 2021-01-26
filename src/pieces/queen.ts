import Piece from './piece';

class Queen extends Piece {
    constructor(x: number, y: number, protected side: string) {
        super(x, y, side);
        // this.name = name;
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
    }

    findLegalMoves() {
        const possibleMoves: Array<string | null> = [];

        for (let y = 0; y < 8; y++) {
            this.y !== y ? possibleMoves.push(`${this.x},${y}`) : null;
        };
        for (let x = 0; x < 8; x++) {
            this.x !== x ? possibleMoves.push(`${x},${this.y}`) : null;
        };
        for (let i = 1; this.y + i <= 7 && this.x - i >= 0; i++) {
            possibleMoves.push(`${this.x - i},${this.y + i}`);
        };
        for (let i = 1; this.y + i <= 7 && this.x + i <= 7; i++) {
            possibleMoves.push(`${this.x + i},${this.y + i}`);
        };
        for (let i = 1; this.y - i >= 0 && this.x + i <= 7; i++) {
            possibleMoves.push(`${this.x + i},${this.y - i}`);
        };
        for (let i = 1; this.y - i >= 0 && this.x - i >= 0; i++) {
            possibleMoves.push(`${this.x - i},${this.y - i}`);
        };
        return possibleMoves;
    }
}

export default Queen;
