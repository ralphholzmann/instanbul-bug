import assert from 'assert';
import addOne from '../src/tested-file';

describe('Tested file', () => {
  it('adds one', () => {
    assert.equal(addOne(3), 4);
  })
});
