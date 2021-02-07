import Piece from './piece';
import Board from '../board';
import Field from '../field';

class Knight extends Piece {
    display: string;

    constructor(side: string) {
        super(side);
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`;
    }

    findAttackingMoves(board: Board, actualField: Field): string[] {
        const moves = [
            [2, 1],
            [1, 2],
            [-2, 1],
            [1, -2],
            [-2, -1],
            [2, -1],
            [-1, 2],
            [-1, -2],
        ];
        const attackMoves: string[] = new Array();
        const x = actualField.x;
        const y = actualField.y;
        let newX = 0;
        let newY = 0;

        for (const el of moves) {
            newX = x + el[0];
            newY = y + el[1];
            if (newX <= 7 && newX >= 0 && newY <= 7 && newY >= 0) {
                attackMoves.push(`${newX},${newY}`);
            }
        }
        return attackMoves;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const legalMoves: Array<string> = [];
        const attackMoves = this.findAttackingMoves(board, actualField);

        for (let i = 0; i < attackMoves.length; i++) {
            const movesSplited = attackMoves[i].split(',');
            const x = parseInt(movesSplited[0]);
            const y = parseInt(movesSplited[1]);
            if (board.fields[x][y].piece?.side !== this.side || !board.fields[x][y].piece) {
                legalMoves.push(attackMoves[i]);
            }
        }
        return legalMoves;
    }
}

export default Knight;
