import Piece from './piece';
import Board from '../board';
import Field from '../field';
import PossibleMoves from '../possibleMoves';

class King extends Piece {
    _display: string;
    offsets: { x: number, y: number }[] = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: -1 }];

    constructor(public side: string) {
        super(side);
        this._display = `<i class="fas fa-chess-king ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): PossibleMoves {
        const possibleMoves: Array<string> = new Array();
        const possibleAttacks: Array<string> = new Array();
        const x = actualField.x;
        const y = actualField.y;

        this.offsets.forEach(offset => {
            let field: Field | null = board.getField(x + offset.x, y + offset.y);
            if (field?.isEmpty()) {
                possibleMoves.push(`${field.x},${field.y}`);
            } else if (field?.piece?.side !== this.side) {
                possibleAttacks.push(`${field?.x},${field?.y}`);
            }
        });

        return {
            'possibleMoves': possibleMoves,
            'possibleAttacks': possibleAttacks
        };
    }
}

export default King;
