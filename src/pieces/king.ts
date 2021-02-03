import Piece from './Piece';
import Board from '../Board';
import Field from '../Field';

class King extends Piece {
    _display: string;

    constructor(side: string) {
        super(side);
        this._display = `<i class="fas fa-chess-king ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: string[] = new Array();

        return possibleMoves;
    }
}

export default King;
