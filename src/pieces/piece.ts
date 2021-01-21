import board from '../board';

class Piece {
    constructor(public x: number, public y: number, private side: string) {
        this.x = x;
        this.y = y;
        this.side = side; //'black' or 'white'
    }
    //id to tablica z kliknieta pozycja na ktra pionek ma sie poruszyc  
    move(id: Array<string>) {
        const newX = Number(id[0]);
        const newY = Number(id[2]);

        //clearing previous place
        board[this.x][this.y] = null;
        document.getElementById(`${this.x},${this.y}`).innerHTML = '';
        // debugger
        //setting new
        this.x = newX;
        this.y = newY;
        board[this.x][this.y] = this;
        document.getElementById(id).innerHTML = this.display;
    }

    // findLegalMoves() { }
}

export default Piece;
