import Piece from './pieces/piece'

export type Field = (Piece | undefined);

// interface 
export interface BasicPiece {
  x: number,
  y: number,
  display: string,
  move(id: string): void,
  //To change
  findLegalMoves(): any;
}