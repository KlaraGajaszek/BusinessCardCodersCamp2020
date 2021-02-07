import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Rook extends Piece {
    display: string;

    constructor(side: string) {
        super(side);
        this.display = `<i class="fas fa-chess-rook ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const attackingMoves = this.findAttackingMoves(board, actualField);
        const possibleMoves = attackingMoves.filter(
            (move) =>
                !board.fields[+move[0]][+move[2]].piece ||
                board.fields[+move[0]][+move[2]].piece!.side !== actualField.piece!.side,
        );
        return possibleMoves;
    }

    findAttackingMoves(board: Board, actualField: Field): string[] {
        const attackingMoves = [];

        for (let u = 1; actualField.y - u > -1; u++) {
            if (board.fields[actualField.x][actualField.y - u].piece) {
                attackingMoves.push(`${actualField.x},${actualField.y - u}`);
                break;
            }
            attackingMoves.push(`${actualField.x},${actualField.y - u}`);
        }

        for (let d = 1; actualField.y + d < 8; d++) {
            if (board.fields[actualField.x][actualField.y + d].piece) {
                attackingMoves.push(`${actualField.x},${actualField.y + d}`);
                break;
            }
            attackingMoves.push(`${actualField.x},${actualField.y + d}`);
        }

        for (let l = 1; actualField.x - l > -1; l++) {
            if (board.fields[actualField.x - l][actualField.y].piece) {
                attackingMoves.push(`${actualField.x - l},${actualField.y}`);
                break;
            }
            attackingMoves.push(`${actualField.x - l},${actualField.y}`);
        }

        for (let r = 1; actualField.x + r < 8; r++) {
            if (board.fields[actualField.x + r][actualField.y].piece) {
                attackingMoves.push(`${actualField.x + r},${actualField.y}`);
                break;
            }
            attackingMoves.push(`${actualField.x + r},${actualField.y}`);
        }
        return attackingMoves;
    }
}

export default Rook;
