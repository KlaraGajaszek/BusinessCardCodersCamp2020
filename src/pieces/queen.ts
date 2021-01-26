import Piece from './piece';

class Queen extends Piece {
    constructor(x: number, y: number, protected side: string) {
        super(x, y, side);
        // this.name = name;
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
    }

    // findLegalMoves() {
    //     const possibleMoves = [];
    
    //     return possibleMoves;
    // }
}

export default Queen;
