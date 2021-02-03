import Board from './Board';
import Field from './Field';

class Game {
    board: Board;

    constructor() {
        this.board = new Board();
        this.board.initBoard();
        this.setup()
    }

    setup(){
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
                    this.touched(e, this.board);
                });

                document.getElementById('board')?.appendChild(square);
            }
        }
    }

    touched(e: MouseEvent, board: Board) {
        const target = e.currentTarget;
        if (target) {
            const x: number = parseInt((target as HTMLDivElement).id[0]);
            const y: number = parseInt((target as HTMLDivElement).id[2]);

            const field: Field = board.getField(x, y);
            if (!field || !field.piece) {
                return;
            }

            const possibleMoves = field.piece.findLegalMoves(board, field);
            for (let move of possibleMoves) {
                (document.getElementById(move) as HTMLDivElement).className += ` possibleMove`;
                (document.getElementById(move) as HTMLDivElement).addEventListener('click', () => {
                    if (field.piece) {
                        field.piece.move(field, board.getField(parseInt(move[0]), parseInt(move[2])));
                    }
                    for (let x = 0; x < board.boardSize; x++) {
                        for (let y = 0; y < board.boardSize; y++) {
                            (document.getElementById(`${x},${y}`) as HTMLDivElement).className = (document
                                .getElementById(`${x},${y}`) as HTMLDivElement)
                                .className.replace(`possibleMove`, '');

                            //TODO: rozwiązać tematykę event listenerów sprytniej, przenosząc każdy do osobnego pliku
                            let old_element = document.getElementById(`${x},${y}`) as HTMLDivElement;
                            let new_element = old_element.cloneNode(true);
                            old_element.parentNode?.replaceChild(new_element, old_element);

                            document.getElementById(`${x},${y}`)?.addEventListener('click', (e) => {
                                this.touched(e, board);
                            });
                        }
                    }
                });
            }
        }
    }

};

export default Game