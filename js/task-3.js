class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padEnd(str) {
    console.log(str);

    str += this.#value;
  }
  padStart(str) {}
  padBoth(str) {}
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
