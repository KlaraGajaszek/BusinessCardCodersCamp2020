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
        const attacking = this.findAttackingMoves(board, actualField);
        const possibleMoves = attacking.filter(position => board.fields[Number(position[0])][Number(position[2])].piece !== null && board.fields[Number(position[0])][Number(position[2])].piece!.side !== actualField.piece!.side || board.fields[Number(position[0])][Number(position[2])].piece === null);
        return possibleMoves;
    }
    findAttackingMoves(board: Board, actualField: Field): Array<string> {
        const attackingMoves: string[] = new Array();
        for (let r = 1; actualField.y + r < 8; r++) {
            if (board.fields[actualField.x][actualField.y + r].piece !== null) {
                attackingMoves.push(`${actualField.x},${actualField.y + r}`);
                break;
            }
            attackingMoves.push(`${actualField.x},${actualField.y + r}`)
        };
        for (let l = 1; actualField.y - l >= 0; l++) {
            if (board.fields[actualField.x][actualField.y - l].piece !== null) {
                attackingMoves.push(`${actualField.x},${actualField.y - l}`);
                break;
            };
            attackingMoves.push(`${actualField.x},${actualField.y - l}`);
        };
        for (let d = 1; actualField.x + d < 8; d++) {
            if (board.fields[actualField.x + d][actualField.y].piece !== null) {
                attackingMoves.push(`${actualField.x + d},${actualField.y}`);
                break;
            }
            attackingMoves.push(`${actualField.x + d},${actualField.y}`)
        };
        for (let u = 1; actualField.x - u >= 0; u++) {
            if (board.fields[actualField.x - u][actualField.y].piece !== null) {
                attackingMoves.push(`${actualField.x - u},${actualField.y}`);
                break;
            }
            attackingMoves.push(`${actualField.x - u},${actualField.y}`);
        };
        for (let ru = 1; actualField.y + ru <= 7 && actualField.x - ru >= 0; ru++) {
            if (board.fields[actualField.x - ru][actualField.y + ru].piece !== null) {
                attackingMoves.push(`${actualField.x - ru},${actualField.y + ru}`);
                break;
            }
            attackingMoves.push(`${actualField.x - ru},${actualField.y + ru}`);
        };
        for (let rd = 1; actualField.y + rd <= 7 && actualField.x + rd <= 7; rd++) {
            if (board.fields[actualField.x + rd][actualField.y + rd].piece !== null) {
                attackingMoves.push(`${actualField.x + rd},${actualField.y + rd}`);
                break;
            }
            attackingMoves.push(`${actualField.x + rd},${actualField.y + rd}`);
        };
        for (let ld = 1; actualField.y - ld >= 0 && actualField.x + ld <= 7; ld++) {
            if (board.fields[actualField.x + ld][actualField.y - ld].piece !== null) {
                attackingMoves.push(`${actualField.x + ld},${actualField.y - ld}`);
                break;
            }
            attackingMoves.push(`${actualField.x + ld},${actualField.y - ld}`);
        };
        for (let lu = 1; actualField.y - lu >= 0 && actualField.x - lu >= 0; lu++) {
            if (board.fields[actualField.x - lu][actualField.y - lu].piece !== null) {
                attackingMoves.push(`${actualField.x - lu},${actualField.y - lu}`);
                break;
            }
            attackingMoves.push(`${actualField.x - lu},${actualField.y - lu}`);
        };
        return attackingMoves;

    }
}

export default Queen;

