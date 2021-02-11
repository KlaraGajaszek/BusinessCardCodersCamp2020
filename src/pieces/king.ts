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

    isShortCastlingPossible(board: Board, actualField: Field): boolean {
        let x = actualField.x;
        return (
            !this.isFieldAttackedWhileCastling(actualField, 4, 6) && !board.getField(x, 7).isEmpty() &&
            board.getField(x, 6).isEmpty() && board.getField(x, 5).isEmpty() &&
            !board.getField(x, 7).piece?.hasPieceMoved
        );
    }

    isLongCastlingPossible(board: Board, actualField: Field): boolean {
        let x = actualField.x;
        return (
            !this.isFieldAttackedWhileCastling(actualField, 2, 4) && !board.getField(x, 0).isEmpty() &&
            board.getField(x, 1).isEmpty() && board.getField(x, 2).isEmpty() &&
            board.getField(x, 3).isEmpty() && !board.getField(x, 0).piece?.hasPieceMoved
        );
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
