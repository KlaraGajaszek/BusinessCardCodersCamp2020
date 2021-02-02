import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Queen extends Piece {
    _display: string;

    constructor(public side: string) {
        super(side);
        this._display = `<i class="fas fa-chess-queen ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: string[] = new Array();
        for (let r = 1; actualField.y + r < 8 && board.fields[actualField.x][actualField.y + r].piece === null; r++) {
            possibleMoves.push(`${actualField.x},${actualField.y + r}`);
        };
        for (let l = 1; actualField.y - l >= 0 && board.fields[actualField.x][actualField.y - l].piece === null; l++) {
            possibleMoves.push(`${actualField.x},${actualField.y - l}`);
        };
        for (let d = 1; actualField.x + d < 8 && board.fields[actualField.x + d][actualField.y].piece === null; d++) {
            possibleMoves.push(`${actualField.x + d},${actualField.y}`);
        };
        for (let u = 1; actualField.x - u >= 0 && board.fields[actualField.x - u][actualField.y].piece === null; u++) {
            possibleMoves.push(`${actualField.x - u},${actualField.y}`);
        };
        for (let ru = 1; actualField.y + ru <= 7 && actualField.x - ru >= 0 && board.fields[actualField.x - ru][actualField.y + ru].piece === null; ru++) {
            possibleMoves.push(`${actualField.x - ru},${actualField.y + ru}`);
        };
        for (let rd = 1; actualField.y + rd <= 7 && actualField.x + rd <= 7 && board.fields[actualField.x + rd][actualField.y + rd].piece === null; rd++) {
            possibleMoves.push(`${actualField.x + rd},${actualField.y + rd}`);
        };
        for (let ld = 1; actualField.y - ld >= 0 && actualField.x + ld <= 7 && board.fields[actualField.x + ld][actualField.y - ld].piece === null; ld++) {
            possibleMoves.push(`${actualField.x + ld},${actualField.y - ld}`);
        };
        for (let lu = 1; actualField.y - lu >= 0 && actualField.x - lu >= 0 && board.fields[actualField.x - lu][actualField.y - lu].piece === null; lu++) {
            possibleMoves.push(`${actualField.x - lu},${actualField.y - lu}`);
        };
        return possibleMoves;

    }
    findAttackingMoves(board: Board, actualField: Field): Array<string | null> {
        const attackingMoves: Array<string | null> = [];
        for (let r = 1; actualField.y + r < 8; r++) {
            if (board.fields[actualField.x][actualField.y + r].piece !== null) {
                if (board.fields[actualField.x][actualField.y + r]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x},${actualField.y + r}`);
                break;
            }
        };
        for (let l = 1; actualField.y - l >= 0; l++) {
            if (board.fields[actualField.x][actualField.y - l].piece !== null) {
                if (board.fields[actualField.x][actualField.y - l]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x},${actualField.y - l}`);
                break;
            };
        };
        for (let d = 1; actualField.x + d < 8; d++) {
            if (board.fields[actualField.x + d][actualField.y].piece !== null) {
                if (board.fields[actualField.x + d][actualField.y]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x + d},${actualField.y}`);
                break;
            }
        };
        for (let u = 1; actualField.x - u >= 0; u++) {
            if (board.fields[actualField.x - u][actualField.y].piece !== null) {
                if (board.fields[actualField.x - u][actualField.y]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x - u},${actualField.y}`);
                break;
            }
        };
        for (let ru = 1; actualField.y + ru <= 7 && actualField.x - ru >= 0; ru++) {
            if (board.fields[actualField.x - ru][actualField.y + ru].piece !== null) {
                if (board.fields[actualField.x - ru][actualField.y + ru]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x - ru},${actualField.y + ru}`);
                break;
            }
        };
        for (let rd = 1; actualField.y + rd <= 7 && actualField.x + rd <= 7; rd++) {
            if (board.fields[actualField.x + rd][actualField.y + rd].piece !== null) {
                if (board.fields[actualField.x + rd][actualField.y + rd]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x + rd},${actualField.y + rd}`);
                break;
            }
        };
        for (let ld = 1; actualField.y - ld >= 0 && actualField.x + ld <= 7; ld++) {
            if (board.fields[actualField.x + ld][actualField.y - ld].piece !== null) {
                if (board.fields[actualField.x + ld][actualField.y - ld]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x + ld},${actualField.y - i}`);
                break;
            }
        };
        for (let lu = 1; actualField.y - lu >= 0 && actualField.x - lu >= 0; lu++) {
            if (board.fields[actualField.x - lu][actualField.y - lu].piece !== null) {
                if (board.fields[actualField.x - lu][actualField.y - lu]?.piece!.side !== actualField.piece!.side)
                    attackingMoves.push(`${actualField.x - lu},${actualField.y - lu}`);
                break;
            }
        };
        return attackingMoves;

    }
}

export default Queen;

