import Piece from './piece';
import Board from '../board';
import Field from '../field';

class King extends Piece {
    _display: string;
    offsets: { x: number, y: number }[] = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: -1 }];

    constructor(protected side: string) {
        super(side);
        this._display = `<i class="fas fa-chess-king ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: Array<string> = new Array();
        const x = actualField.x;
        const y = actualField.y;

        this.offsets.forEach(offset => {
            let field: Field | null = board.getField(x + offset.x, y + offset.y);
            if (field?.isEmpty()) {
                possibleMoves.push(`${field.x},${field.y}`);
            }
        });

        return possibleMoves;
    }
}

export default King;
