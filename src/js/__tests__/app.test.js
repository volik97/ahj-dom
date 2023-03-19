import Board from "../board";
import Goblin from "../goblin";

test("создание игрового поля", () => {
  const board = new Board();
  const field = board.getBoard(4);
  const received = field.querySelectorAll(".hole");
  expect(received.length).toBe(16);
});

test("создание персонажа", () => {
  const goblin = new Goblin();
  const char = goblin.getGoblin();
  const received = char.classList.contains("goblin");
  expect(received).toBeTruthy();
});
