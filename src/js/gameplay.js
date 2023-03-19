export default class Game {
  constructor(character, board) {
    this.character = character;
    this.board = board;
    this.boardCells = 4;
    this.activeCharacter = null;
  }

  boardInit() {
    const board = this.board.getBoard(this.boardCells);
    document.body.insertBefore(board, null);
    this.cells = [...board.children];
  }

  positionGeneration() {
    const position = Math.floor(Math.random() * this.cells.length);
    if (position === this.position) {
      this.positionGeneration();
      return;
    }
    this.delCharacter();
    this.position = position;
    this.adventCharacter();
  }

  delCharacter() {
    if (this.activeCharacter === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  adventCharacter() {
    this.activeCharacter = this.character.getGoblin();
    this.cells[this.position].appendChild(this.activeCharacter);
  }

  start() {
    this.boardInit();
    setInterval(() => this.positionGeneration(), 1000);
  }
}
