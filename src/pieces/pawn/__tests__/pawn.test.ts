import Pawn from '../pawn'

describe("possibleMoves test", () => {
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


