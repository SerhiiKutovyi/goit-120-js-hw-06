class Storage {
  #items;

  constructor(params) {
    this.#items = params;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(elm => elm !== itemToRemove);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems());

storage.addItem('Droid');
console.log(storage.getItems());

storage.removeItem('Prolonger');
console.log(storage.getItems());

storage.removeItem('Scaner');
console.log(storage.getItems());
