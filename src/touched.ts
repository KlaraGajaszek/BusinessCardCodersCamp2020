import Board from './Board';

const touched = (e: MouseEvent, board: Board) => {
    const target = e.currentTarget;
    const x: number = parseInt((target as HTMLDivElement)?.id[0]);
    const y: number = parseInt((target as HTMLDivElement)?.id[2]);

    const field = board.field[x][y]
    if (!field) {
        return;
    }
    const possibleMoves = field.findLegalMoves(board, {x: x, y: y});
    for (let move of possibleMoves) {
        (document.getElementById(move) as HTMLDivElement).className += ` possibleMove`;
        (document.getElementById(move) as HTMLDivElement).addEventListener('click', () => {
            field.move(field, {x: move[0], y: move[2]});
            for (let x = 0; x < board.boardSize; x++) {
                for (let y = 0; y < board.boardSize; y++) {
                    (document.getElementById(`${x},${y}`) as HTMLDivElement).className = (
                        document.getElementById(`${x},${y}`) as HTMLDivElement).className.replace(`possibleMove`, '');

                    //TODO: rozwiązać tematykę event listenerów sprytniej, przenosząc każdy do osobnego pliku
                    let oldElement = document.getElementById(`${x},${y}`) as HTMLDivElement;
                        let newElement = oldElement.cloneNode(true);
                        oldElement.parentNode?.replaceChild(newElement, oldElement);

                        document.getElementById(`${x},${y}`)?.addEventListener('click', (e) => {
                            touched(e, board);
                    });
                }
            }
        });
    }
};

export default touched;
