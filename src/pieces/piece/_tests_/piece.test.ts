import Piece from '../piece'


describe("Piece", () => {
    const piece = new Piece(3, 2, 'black');

    it("should construct with x, y and side", () => {
        expect(piece.x).toBe(3);
        expect(piece.y).toBe(2 );
        expect(piece.side).toBe("black");
      })

    it("should update x and y after move", () => {
      piece.move(["1","2","3"])

      expect(piece.x).toBe(1);
      expect(piece.y).toBe(3);
    })
  })
