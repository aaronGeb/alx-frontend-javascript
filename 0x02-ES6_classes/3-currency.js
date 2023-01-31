export default class Currency {
  // check eslint.
  constructor(code, name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be string');
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
