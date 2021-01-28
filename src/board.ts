import Pawn from './pieces/pawn';
import Knight from './pieces/knight'
import { Field } from '../src/types'

const board: Field[][] = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn = new Pawn(6, 0, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 1, 'white');
board[pawn.x][pawn.y] = pawn;

let knight1 = new Knight(0,1,'black')
board[knight1.x][knight1.y] = knight1;

let knight2 = new Knight(0,6,'black')
board[knight2.x][knight2.y] = knight2;

let knight3 = new Knight(7,1,'white')
board[knight3.x][knight3.y] = knight3;

let knight4 = new Knight(7,6,'white')
board[knight4.x][knight4.y] = knight4;



export default board;
