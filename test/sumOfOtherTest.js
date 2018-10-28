const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('../src/sumOfOther');

describe('Return an array of sums of other values', () => {
  it('1', () => {
    const arrayTest = sumOfOther([1, 2, 3]);
    assert.deepEqual(arrayTest, [5, 4, 3]);
  });

  it('2', () => {
    const arrayTest = sumOfOther([8, 6, 7, 11, 85, 30]);
    assert.deepEqual(arrayTest, [139, 141, 140, 136, 62, 117]);
  });

  it('3', () => {
    const arrayTest = sumOfOther([139, 141, 140, 136, 62, 117]);
    assert.deepEqual(arrayTest, [596, 594, 595, 599, 673, 618]);
  });

  it('4', () => {
    const arrayTest = sumOfOther([15345, 15353, 14554, 5, 44, 758]);
    assert.deepEqual(arrayTest, [30714, 30706, 31505, 46054, 46015, 45301]);
  });

  it('5', () => {
    const arrayTest = sumOfOther([1391112, 141142, 145240, 145345345336, 64124532, 1453453453717]);
    assert.deepEqual(arrayTest, [1598863209967, 1598864459937, 1598864455839,
      1453519255743, 1598800476547, 145411147362]);
  });
});
