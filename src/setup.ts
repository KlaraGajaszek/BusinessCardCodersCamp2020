import touched from './touched';
import Board from './board';

export const setup = () => {
    const board = new Board();
    board.initBoard();

    const fields = board.fields;
    for (let x = 0; x < board.boardSize; x++) {
        for (let y = 0; y < board.boardSize; y++) {
            const square = document.createElement('div');
            square.id = `${x},${y}`;
            square.className = 'square'; 
            square.className += x % 2 == y % 2 ? ' light' : ' dark';

            let field = fields[x][y];
            if (!field.isEmpty()) {
                square.innerHTML = field.piece!.display;
            }

            square.addEventListener('click', (e) => {
                touched(e, board);
            });

            document.getElementById('board')?.appendChild(square);
        }
    }
};
