import Pawn from '../pawn'


describe("possibleMoves test", () => {

  it("check if value in constructor is good", () => {
    const pawn = new Pawn(5, 4, 'white');
    // const icon = `<i class="fas fa-chess-pawn white"></i>`

    expect(pawn.x).toBe(5);
    expect(pawn.y).toBe(4);
    expect(pawn.side).toBe("white");
    // expect(pawn.display).toBe(icon)

    expect(pawn.findLegalMoves()).toEqual(["4,4", "3,4"])
  })


})