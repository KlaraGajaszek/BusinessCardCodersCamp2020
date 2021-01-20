import Board from './Board';
import { iterateOver2DArray } from './utils';


class Game {
  constructor() {
    this.board = new Board();
    this.gameArea = this.board.gameArea;
  }
