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
        const x = actualField.x;
        return (
            !this.isFieldAttackedWhileCastling(actualField, 4, 6) && !board.getField(x, 7).isEmpty() &&
            board.getField(x, 6).isEmpty() && board.getField(x, 5).isEmpty() &&
            !board.getField(x, 7).piece?.hasPieceMoved
        );
    }

    isLongCastlingPossible(board: Board, actualField: Field): boolean {
        const x = actualField.x;
        return (
            !this.isFieldAttackedWhileCastling(actualField, 2, 4) && !board.getField(x, 0).isEmpty() &&
            board.getField(x, 1).isEmpty() && board.getField(x, 2).isEmpty() &&
            board.getField(x, 3).isEmpty() && !board.getField(x, 0).piece?.hasPieceMoved
        );
    }

    isFieldAttackedWhileCastling(actualField: Field, l: number, r: number): boolean {
        const x = actualField.x;
        const castlingKingMoves: string[] = [];
        const arrOfCommonMoves: (string | undefined)[] = [];
        let attackingMoves: (string | undefined)[];

        if (this.side === 'white') attackingMoves = game.allAttackingMovesBySide('black');
        else attackingMoves = game.allAttackingMovesBySide('white');

        for (let i = l; i <= r; i++) {
            castlingKingMoves.push(`${x},${i}`);
        }

        for (let j = 0; j < castlingKingMoves.length; j++) {
            attackingMoves.forEach(move => {
                if (move !== undefined && castlingKingMoves[j][0] === move[0] &&
                    castlingKingMoves[j][2] === move[2]) {
                    arrOfCommonMoves.push(castlingKingMoves[j]);
                }
            });
        }
        return arrOfCommonMoves.length === 0 ? false : true;
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

        if (!this.hasPieceMoved) {
            if (this.isLongCastlingPossible(board, actualField)) possibleMoves.push(`${actualField.x},2`);
            if (this.isShortCastlingPossible(board, actualField)) possibleMoves.push(`${actualField.x},6`);
        }
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

    move(oldField: Field, newField: Field, board: Board): void {
        super.move(oldField, newField, board);

        if (newField.y - oldField.y === 2) {
            let rookCastling = board.getField(oldField.x, 7).piece;
            board.getField(oldField.x, 7).piece = null;
            (document.getElementById(`${oldField.x},7`) as HTMLDivElement).innerHTML = '';
            board.getField(oldField.x, 3).piece = rookCastling;
            (document.getElementById(`${oldField.x},5`) as HTMLDivElement).innerHTML = `<i class="fas fa-chess-rook ${this.side}"></i>`;
        } else if (newField.y - oldField.y === -2) {
            let rookCastling = board.getField(oldField.x, 0).piece;
            board.getField(oldField.x, 0).piece = null;
            (document.getElementById(`${oldField.x},0`) as HTMLDivElement).innerHTML = '';
            board.getField(oldField.x, 3).piece = rookCastling;
            (document.getElementById(`${oldField.x},3`) as HTMLDivElement).innerHTML = `<i class="fas fa-chess-rook ${this.side}"></i>`;
        }
    }
}

export default King;
