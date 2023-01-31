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
    if (value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be string');
    }
  }

  displayFullCurrency() {
    return `${this._name} ${this._code}`;
  }
}
