import Board from './board';
import Field from './field';


const allAttackingMoves = (board: Board) => {
  const allAttacks: string[] = [];

  for (let x = 0; x < board.boardSize; x++) {
      for (let y = 0; y < board.boardSize; y++) {
        let field: Field = board.getField(x, y);
        if(field !== null && field.piece !== undefined) {
            allAttacks.push(!field.piece?.findAttackingMoves(board,field));
        }
    }
  }
  return allAttacks.flat(Infinity).filter(cord => cord != undefined);
}

export default allAttackingMoves;