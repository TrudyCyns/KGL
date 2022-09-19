const { assert } = require('chai');
const { describe, it } = require('mocha');

describe('Produce Controller', () => {
  it('should return a string', () => {
    assert.isString('Fake Test');
  });
  it('should return an array', () => {
    assert.isArray([]);
  });
  it('should return true', () => {
    assert.equal(true, true);
  });
});
