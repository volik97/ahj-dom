import Board from "./board.js";
import Goblin from "./goblin.js";
import Game from "./gameplay.js";

const bord = new Board();
const goblin = new Goblin();
const board = new Game(goblin, bord);
board.start();
