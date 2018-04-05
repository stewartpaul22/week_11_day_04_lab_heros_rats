var assert = require('assert');
var Food = require('../food.js');

describe('Food', function(){

  var food1;

  beforeEach(function(){
    food1 = new Food('Bread', 3);
  })

  it('should have a name', function(){
    assert.strictEqual(food1.name, 'Bread');
  });
  // Food should have a replenishment value
  it('should have a replenishment value', function(){
    assert.strictEqual(food1.replenishmentVal, 3);
  });

});
