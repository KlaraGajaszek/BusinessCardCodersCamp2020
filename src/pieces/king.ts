import Piece from './piece';
import Board from '../board';
import Field from '../field';
import { game } from '../main';

class King extends Piece {
    display: string;
    offsets: { x: number, y: number }[] = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -1, y: -1 }, { x: 1, y: -1 }];

    constructor(public side: string) {
        super(side);
        this.display = `<i class="fas fa-chess-king ${side}"></i>`;
    }

    findLegalMoves(board: Board, actualField: Field): string[] {
        const possibleMoves: string[] = new Array();
        const x = actualField.x;
        const y = actualField.y;
        let attackingMoves: (string | undefined)[];
        if (this.side === 'white') {
            attackingMoves = game.allAttackingMovesBySide('black');
        } else {
            attackingMoves = game.allAttackingMovesBySide('white');
        }

        this.offsets.forEach(offset => {
            try {
                let field: Field = board.getField(x + offset.x, y + offset.y);
                if ((field.isEmpty() || field.piece?.side !== this.side) && !this.isInEnemyAttackingMoves(attackingMoves, field)) {
                    possibleMoves.push(`${field.x},${field.y}`);
                }
            } catch (exception) {

            }
        });

        return possibleMoves;
    }

    findAttackingMoves(board: Board, actualField: Field): string[] {
        const attackingMoves: string[] = new Array();
        const x = actualField.x;
        const y = actualField.y;

        this.offsets.forEach(offset => {
            try {
                let field: Field = board.getField(x + offset.x, y + offset.y);
                attackingMoves.push(`${field.x},${field.y}`);
            } catch (exception) {

            }
        });

        return attackingMoves;
    }

    private isInEnemyAttackingMoves(attackingMoves: (string | undefined)[], field: Field): boolean {
        let result = false;
        attackingMoves.forEach(move => {
            if (move !== undefined && Number(move[0]) === field.x && Number(move[2]) === field.y) {
                result = true;
            }
        });
        return result;
    }
}

export default King;
