import Piece from './piece';
import Board from '../board';
import Field from '../field';

class King extends Piece {
    _display: string;
    offsets: { x: number, y: number }[] = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: -1 }];

    constructor(public side: string) {
        super(side);
        this._display = `<i class="fas fa-chess-king ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: Array<string> = new Array();
        const x = actualField.x;
        const y = actualField.y;

        this.offsets.forEach(offset => {
            let field: Field | null = board.getField(x + offset.x, y + offset.y);
            if (field !== null) {
                if (field.isEmpty() || field.piece?.side !== this.side) {
                    possibleMoves.push(`${field.x},${field.y}`);
                }
            }
        });
        console.log(possibleMoves);
        return possibleMoves;
    }
}

export default King;
