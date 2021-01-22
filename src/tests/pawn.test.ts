import Pawn from '../pieces/pawn'

describe("possibleMoves test", () => {
  const pawn = new Pawn(5, 4, 'white', 'pawn');
  [
    { entryPoint: pawn, expectedReturn: ['4,4', '3,4'] }
  ].map(testCase => {
    it(`for entry point ${testCase.entryPoint} should return [${testCase.expectedReturn}]`, () => {
      expect(pawn.findLegalMoves()).toEqual(testCase.expectedReturn)
    })
  })

})
