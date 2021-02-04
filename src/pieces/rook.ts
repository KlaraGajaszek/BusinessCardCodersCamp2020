import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Rook extends Piece {
    _display: string;

    constructor(protected side: string) {
        super(side);
        this._display = `<i class="fas fa-chess-rook ${side}"></i>`;
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

export default Rook;
