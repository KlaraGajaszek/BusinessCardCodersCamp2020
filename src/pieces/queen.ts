import Piece from './piece';
import board from '../board';

class Queen extends Piece {
    constructor(x: number, y: number, protected side: string) {
        super(x, y, side);
        // this.name = name;
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
    }

    findLegalMoves() {
        const possibleMoves: Array<string | null> = [];
        for (let i = 1; this.y + i < 8 && !board[this.x][this.y + i]; i++) {
            possibleMoves.push(`${this.x},${this.y + i}`);
        };
        for (let i = 1; this.y - i >= 0 && !board[this.x][this.y - i]; i++) {
            possibleMoves.push(`${this.x},${this.y - i}`);
        };
        for (let i = 1; this.x + i < 8 && !board[this.x + i][this.y]; i++) {
            possibleMoves.push(`${this.x + i},${this.y}`);
        };
        for (let i = 1; this.x - i >= 0 && !board[this.x - i][this.y]; i++) {
            possibleMoves.push(`${this.x - i},${this.y}`);
        };
        for (let i = 1; this.y + i <= 7 && this.x - i >= 0 && !board[this.x - i][this.y + i]; i++) {
            possibleMoves.push(`${this.x - i},${this.y + i}`);
        };
        for (let i = 1; this.y + i <= 7 && this.x + i <= 7 && !board[this.x + i][this.y + i]; i++) {
            possibleMoves.push(`${this.x + i},${this.y + i}`);
        };
        for (let i = 1; this.y - i >= 0 && this.x + i <= 7 && !board[this.x + i][this.y - i]; i++) {
            possibleMoves.push(`${this.x + i},${this.y - i}`);
        };
        for (let i = 1; this.y - i >= 0 && this.x - i >= 0 && !board[this.x - i][this.y - i]; i++) {
            possibleMoves.push(`${this.x - i},${this.y - i}`);
        };
        return possibleMoves;
    }
    findAttackingMoves() {
        const attackingMoves: Array<string | null> = [];
        for (let i = 1; this.y + i < 8; i++) {
            if (board[this.x][this.y + i] && board[this.x][this.y + i]?.side !== this.side) {
                attackingMoves.push(`${this.x},${this.y + i}`);
                break;
            }
        };
        for (let i = 1; this.y - i >= 0; i++) {
            if (board[this.x][this.y - i] && board[this.x][this.y - i]?.side !== this.side) {
                attackingMoves.push(`${this.x},${this.y - i}`);
                break;
            };
        };
        for (let i = 1; this.x + i < 8; i++) {
            if (board[this.x + i][this.y] && board[this.x + i][this.y]?.side !== this.side) {
                attackingMoves.push(`${this.x + i},${this.y}`);
                break;
            }
        };
        for (let i = 1; this.x - i >= 0; i++) {
            if (board[this.x - i][this.y] && board[this.x - i][this.y]?.side !== this.side) {
                attackingMoves.push(`${this.x - i},${this.y}`);
                break;
            }
        };
        for (let i = 1; this.y + i <= 7 && this.x - i >= 0; i++) {
            if (board[this.x - i][this.y + i] && board[this.x - i][this.y + i]?.side !== this.side) {
                attackingMoves.push(`${this.x - i},${this.y + i}`)
                break;
            }
        };
        for (let i = 1; this.y + i <= 7 && this.x + i <= 7; i++) {
            if (board[this.x + i][this.y + i] && board[this.x + i][this.y + i]?.side !== this.side) {
                attackingMoves.push(`${this.x + i},${this.y + i}`);
                break;
            }
        };
        for (let i = 1; this.y - i >= 0 && this.x + i <= 7; i++) {
            if (board[this.x + i][this.y - i] && board[this.x + i][this.y - i]?.side !== this.side) {
                attackingMoves.push(`${this.x + i},${this.y - i}`);
                break;
            }
        };
        for (let i = 1; this.y - i >= 0 && this.x - i >= 0; i++) {
            if (board[this.x - i][this.y - i] && board[this.x - i][this.y - i]?.side !== this.side) {
                attackingMoves.push(`${this.x - i},${this.y - i}`);
                break;
            }
        };
        return attackingMoves;
    }
}
export default Queen;

