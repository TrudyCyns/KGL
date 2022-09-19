const { assert } = require('chai');
const { describe, it } = require('mocha');
const produceController = require('../controllers/produceController');

describe('Produce Controller', () => {
  it('should get all produce', () => {
    assert.isEmpty(produceController.getAllProduce());
  });
  it('should create produce', () => {
    assert.isEmpty(produceController.createProduce());
  });
  it('should update produce', () => {
    assert.isEmpty(produceController.updateProduce());
  });
  it('should delete produce', () => {
    assert.isEmpty(produceController.deleteProduce());
  });
});
