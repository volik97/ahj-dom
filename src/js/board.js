export default class Board {
  constructor() {
    this.board = null;
  }

  createBoard(number) {
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < Math.floor(number) * Math.floor(number); i++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      board.appendChild(hole);
    }
    this.board = board;
  }

  getBoard(number) {
    this.createBoard(number);
    return this.board;
  }
}
