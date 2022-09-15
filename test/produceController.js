const { assert } = require('chai');
const { describe, it } = require('mocha');
const produceController = require('../controllers/produceController');

describe('Produce Controller', () => {
  it('should get all produce', () => {
    assert.isNotEmpty(produceController.getAllProduce());
  });
  it('should create produce', () => {
    assert.isNotEmpty(produceController.createProduce());
  });
  it('should update produce', () => {
    assert.isNotEmpty(produceController.updateProduce());
  });
  it('should delete produce', () => {
    assert.isNotEmpty(produceController.deleteProduce());
  });
});
