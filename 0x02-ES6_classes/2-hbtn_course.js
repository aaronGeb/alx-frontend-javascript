export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name should be string ');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length should be number');
    }
    if (typeof students !== 'object') {
      throw new TypeError('Student should be object');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name should be string ');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length should be number');
    }
    this.length = value;
  }

  get students() {
    return this._students();
  }

  set students(value) {
    if (typeof value !== 'object') {
      throw new TypeError('Student should be object');
    }
    this._students = value;
  }
}
