import Queen from './pieces/queen';
import Rook from './pieces/rook';
import Bishop from './pieces/bishop';
import Knight from './pieces/knight';
import Board from './Board';
import Clock from './clock';
import Field from './Field';
import Pawn from './pieces/pawn';
import Promo from './promo';

class Game {
    board: Board;
    whiteClock: Clock;
    blackClock: Clock;
    turn: string;
    promo: Promo

    constructor() {
        this.turn = "white";
        this.board = new Board();
        this.board.initBoard();
        this.setup();
        this.blackClock = new Clock('black', 15, 0, 'blackClock');
        this.blackClock.render();
        this.whiteClock = new Clock('white', 15, 0, 'whiteClock');
        this.whiteClock.render();
        this.promo = new Promo();
        this.promo.render();
    }

    afterMove(field: Field, move: string) {

        const newField = this.board.getField(parseInt(move[0]), parseInt(move[2]));
        this.movePiece(field, newField);
        this.promotePawn(newField);
        this.updateEnpassantStatus();
        this.movePiece(field, move);
        this.isCheck();
        this.changeTurn();
        this.changeClock();
        // Logika która powinna znajdować sie po ruchu znajduje się tutaj,
        // oczywiście chodzi tutaj o wywołania odpowiednich funkcji tylko :)
        // czyli np. sprawdzenie czy jest szach, mat, pat, zmiana tury itp.
    }


    promotePawn(newField: Field): void {
        const color = this.turn === 'white' ? 0 : 7
        // const field = newField.piece?.side === 'white' ? 0 : 7 
        for (let y = 0; y < this.board.boardSize; y++) {
            if (this.board.fields[color][y].piece instanceof Pawn) {
                this.promo.promoScreenTrigger();
                const possiblePromoPieces = document.querySelectorAll('.promo div');
                possiblePromoPieces.forEach(piece => {
                    piece.addEventListener('click', () => {
                        if (piece.innerHTML.includes('rook')) {
                            this.board.fields[color][y].piece = new Rook(this.turn);
                            this.board.fields[color][y].piece?.render(newField);
                        } else if (piece.innerHTML.includes('bishop')) {
                            this.board.fields[color][y].piece = new Bishop(this.turn);
                            this.board.fields[color][y].piece?.render(newField);
                        } else if (piece.innerHTML.includes('queen')) {
                            this.board.fields[color][y].piece = new Queen(this.turn);
                            this.board.fields[color][y].piece?.render(newField);
                        } else if (piece.innerHTML.includes('knight')) {
                            this.board.fields[color][y].piece = new Knight(this.turn);
                            this.board.fields[color][y].piece?.render(newField);
                        }
                        this.promo.promoScreenClose();
                        this.changeTurn();
                        this.changeClock();
                    })
                })

            }
        }

    }



    updateEnpassantStatus() {
        for (let x = 0; x < this.board.boardSize; x++) {
            for (let y = 0; y < this.board.boardSize; y++) {
                if (this.board.fields[x][y].piece instanceof Pawn && (this.board.fields[x][y].piece as Pawn).isEnPassantPossible) {
                    (this.board.fields[x][y].piece as Pawn).isEnPassantPossible = false;
                }
            }
        }
    }

    allAttackingMovesBySide(color: string) {
        return this.getAllPiecesBySide(color).map(field => field?.piece?.findAttackingMoves(this.board, field)).flat()
    }

    getAllPiecesBySide(color: string): Field[] {
        return this.board.fields.flat().filter(field => field?.piece && field.piece.side === color)
    }

    setup() {
        const fields = this.board.fields;
        for (let x = 0; x < this.board.boardSize; x++) {
            for (let y = 0; y < this.board.boardSize; y++) {
                const square = document.createElement('div');
                square.id = `${x},${y}`;
                square.className = 'square';
                square.className += x % 2 == y % 2 ? ' light' : ' dark';

                let field = fields[x][y];
                if (!field.isEmpty()) {
                    square.innerHTML = field.piece!.display;
                }

                square.addEventListener('click', (e) => {
                    this.touched(e);
                });

                document.getElementById('board')?.appendChild(square);
            }
        }
    }

    touched(e: MouseEvent) {
        const target = e.currentTarget;
        if (target) {
            const x: number = parseInt((target as HTMLDivElement).id[0]);
            const y: number = parseInt((target as HTMLDivElement).id[2]);

            const field: Field = this.board.getField(x, y);
            if (!field?.piece) return;

            if (this.turn === field.piece.side) {
                const possibleMoves = field.piece.findLegalMoves(this.board, field);
                for (let move of possibleMoves) {
                    (document.getElementById(move) as HTMLDivElement).className += ` possibleMove`;
                    (document.getElementById(move) as HTMLDivElement).addEventListener('click', () => {
                        this.afterMove(field, move);
                    });
                }
            }
        }
    }

    movePiece(field: Field, newField: Field) {
        if (field.piece) {
            field.piece.move(field, newField);
        }
        for (let x = 0; x < this.board.boardSize; x++) {
            for (let y = 0; y < this.board.boardSize; y++) {
                (document.getElementById(`${x},${y}`) as HTMLDivElement).className = (document.getElementById(
                    `${x},${y}`,
                ) as HTMLDivElement).className.replace(`possibleMove`, '');

                let old_element = document.getElementById(`${x},${y}`) as HTMLDivElement;
                let new_element = old_element.cloneNode(true);
                old_element.parentNode?.replaceChild(new_element, old_element);

                document.getElementById(`${x},${y}`)?.addEventListener('click', (e) => {
                    this.touched(e);
                });
            }
        }
    }

    changeTurn(): void {
        this.turn = this.turn === 'white' ? 'black' : 'white';
    }

    getKingPosition(pieceside: string): string {
        const kingPosition = this.board.fields.flat().filter(
            field => field.piece?.display === `<i class="fas fa-chess-king ${pieceside}"></i>`
        );
        return `${kingPosition[0].x},${kingPosition[0].y}`;
    }

    isCheck() {
        const counterSide = this.turn === 'white' ? 'black' : 'white';
        const kingPosition = this.getKingPosition(counterSide);

        return this.allAttackingMovesBySide(this.turn).includes(kingPosition);
    }
    changeClock(): void {
        if (this.turn === 'white') {
            this.whiteClock.startClock();
            this.blackClock.stopClock();
        } else if (this.turn === 'black') {
            this.blackClock.startClock();
            this.whiteClock.stopClock();
        }
    }
}

export default Game;
