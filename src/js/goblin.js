export default class Goblin {
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
