/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/board.js
class Board {
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
;// CONCATENATED MODULE: ./src/js/goblin.js
class Goblin {
  constructor() {
    this.goblin;
  }
  createGoblin() {
    const goblin = document.createElement("div");
    goblin.classList.add("goblin");
    this.goblin = goblin;
  }
  getGoblin() {
    this.createGoblin();
    return this.goblin;
  }
}
;// CONCATENATED MODULE: ./src/js/gameplay.js
class Game {
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
;// CONCATENATED MODULE: ./src/js/app.js



const bord = new Board();
const goblin = new Goblin();
const board = new Game(goblin, bord);
board.start();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;