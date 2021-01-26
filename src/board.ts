import Pawn from './pieces/pawn';
import { Field } from '../src/types'

const board: Field[][] = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}

//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn;

// White side
for (let i = 0; i < 8; i++) {
    pawn = new Pawn(6, i, 'white');
    board[pawn.x][pawn.y] = pawn;
}


// Black side
for (let i = 0; i < 8; i++) {
    pawn = new Pawn(1, i, 'black');
    board[pawn.x][pawn.y] = pawn;
}


export default board;
