const sum = require('./sum');
test('0x00-es6_basic', () => {
  expect(sum.add(2, 2)).toBe(4);
});
