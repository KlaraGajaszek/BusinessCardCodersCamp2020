import Piece from './piece';

class Knight extends Piece {
    constructor(x: number, y: number, protected side: string) {
        super(x, y, side);
        // this.name = name;
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
    }
    findLegalMoves() {
        const possibleMoves: Array<string> = [];

        if (this.x+1 <=7 && this.x+1 >= 0 && this.y+2 <= 7 && this.y+2 >= 0) {
            possibleMoves.push(`${this.x+1},${this.y+2}`)
        }
        if (this.x+2 <=7 && this.x+2 >= 0 && this.y+1 <= 7 && this.y+1 >= 0) {
            possibleMoves.push(`${this.x+2},${this.y+1}`)
        }
        if (this.x+2 <=7 && x+2 >= 0 && this.y-1 <= 7 && this.y-1 >= 0) {
            possibleMoves.push(`${this.x+2},${this.y-1}`)
        }
        if (this.x+1 <=7 && this.x+1 >= 0 && this.y-2 <= 7 && this.y-2 >= 0) {
            possibleMoves.push(`${this.x+1},${this.y-2}`)
        }
        if (this.x-1 <=7 && this.x-1 >= 0 && this.y-2 <= 7 && this.y-2 >= 0) {
            possibleMoves.push(`${this.x-1},${this.y-2}`)
        }
        if (this.x-2 <=7 && this.x-2 >= 0 && this.y-1 <= 7 && this.y-1 >= 0) {
            possibleMoves.push(`${this.x-2},${this.y-1}`)
        }
        if (this.x-2 <=7 && this.x-2 >= 0 && this.y+1 <= 7 && this.y+1 >= 0) {
            possibleMoves.push(`${this.x-2},${this.y+1}`)
        }
        if (this.x-1 <=7 && this.x-1 >= 0 && this.y+2 <= 7 && this.y+2 >= 0) {
            possibleMoves.push(`${this.x-1},${this.y+2}`)
        }
    

        return possibleMoves;
    // }
}

export default Knight;
