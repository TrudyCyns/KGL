const { assert } = require('chai');
const { describe, it } = require('mocha');
const produceController = require('../controllers/produceController');

describe('Produce Controller', () => {
  it('should get produce', () => {
    assert.isNotEmpty(produceController.getAllProduce());
  });
  it('should create produce', () => {
    assert.isNotEmpty(produceController.createProduce());
  });
  it('should get produce', () => {
    assert.isNotEmpty(produceController.getAllProduce());
  });
  it('should get produce', () => {
    assert.isNotEmpty(produceController.getAllProduce());
  });
  it('should get produce', () => {
    assert.isNotEmpty(produceController.getAllProduce());
  });
  it('should get produce', () => {
    assert.isNotEmpty(produceController.getAllProduce());
  });
});
