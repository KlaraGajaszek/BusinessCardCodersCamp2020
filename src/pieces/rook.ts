import Piece from './Piece';
import Board from '../Board';
import Field from '../Field';

class Rook extends Piece {
    display: string;

    constructor(side: string) {
        super(side);
        this.display = `<i class="fas fa-chess-rook ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: string[] = new Array();

        return possibleMoves;
    }

    findAttackingMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: string[] = new Array();
    
        return possibleMoves;
    }
}

export default Rook;
