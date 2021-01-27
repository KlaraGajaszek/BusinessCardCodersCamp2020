import Piece from './piece';

class Knight extends Piece {
    constructor(x: number, y: number, readonly side: string) {
        super(x, y, side);
        // this.name = name;
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
    }
    // findLegalMoves() {
    //     const possibleMoves = [];

    //     return possibleMoves;
    // }
}

export default Knight;
