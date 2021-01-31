import Piece from './Piece';
import Board from '../Board';
import Field from '../field';

class King extends Piece {
    display: string;
    side: string;
    x: number;
    y: number;

    constructor(x: number, y: number, side: string) {
        super(x, y, side);
        this.side = side;
        this.x = x;
        this.y = y;
        this.display = `<i class="fas fa-chess-king ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: string[] = new Array();

        return possibleMoves;
    }

    findAttackingMoves(board: Board, actualField: Field): string[] {
        const attackingMoves: string[] = new Array();
    
        return attackingMoves;
    }
}

export default King;
