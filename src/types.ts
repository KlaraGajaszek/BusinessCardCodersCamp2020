import Piece from './pieces/piece'
import Pawn from './pieces/pawn'

export type Field = ( Pawn | Piece | null);

// interface 
export interface BasicPiece {
  x: number,
  y: number,
  display: string,
  readonly side: string,
  move(id: string): void,
  //To change
  findLegalMoves(board: Field[][]): string[];
}
