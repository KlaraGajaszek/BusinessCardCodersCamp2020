import Pawn from '../pawn'

describe("possibleMoves test", () => {

  it("check if value in constructor is good", () => {
    const pawn = new Pawn(5, 4, 'white');

    expect(pawn.x).toBe(5);
    expect(pawn.y).toBe(4);
    expect(pawn.side).toBe("white");
  })
})

describe("type of value in constructor test", () => {
  const pawn1 = new Pawn(5, 4, 'white');
  const pawn2 = new Pawn(7, 7, 'white');
  const pawn3 = new Pawn(1, 3, 'white');
  [
    { entryPoint: pawn1, expectedReturn: ['number', 'number', 'string'] },
    { entryPoint: pawn2, expectedReturn: ['number', 'number', 'string'] },
    { entryPoint: pawn3, expectedReturn: ['number', 'number', 'string'] }
  ].map(testCase => {
    it(`for entry point ${testCase.entryPoint} should return [${testCase.expectedReturn}]`, () => {
      expect([(typeof testCase.entryPoint.x), (typeof testCase.entryPoint.y), (typeof testCase.entryPoint.side)]).toEqual(testCase.expectedReturn);
    })
  })

})



describe("check possibleMoves", () => {
  const pawn1 = new Pawn(5, 4, 'white');
  const pawn2 = new Pawn(7, 7, 'white');
  const pawn3 = new Pawn(1, 3, 'white');
  [
    { entryPoint: pawn1, expectedReturn: ['4,4', '3,4'] },
    { entryPoint: pawn2, expectedReturn: ['6,7', '5,7'] },
    { entryPoint: pawn3, expectedReturn: [] }
  ].map(testCase => {
    it(`for entry point ${testCase.entryPoint} should return [${testCase.expectedReturn}]`, () => {
      expect(testCase.entryPoint.findLegalMoves()).toEqual(testCase.expectedReturn);
    })
  })

})




