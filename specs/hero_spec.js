var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function(){

  var hero1;

  beforeEach(function(){
    hero1 = new Hero("Jeff", 100, "Burgers");
  })

  it('should have a name', function(){
    assert.strictEqual(hero1.name, "Jeff");
  });

  it('should have health', function(){
    assert.strictEqual(hero1.health, 100);
  });
  // A Hero has a favourite food
  it('should have favourite food', function(){
    assert.strictEqual(hero1.favFood, "Burgers");
  });
  // A Hero can talk saying their name
  // A Hero has a collection of tasks to complete

});
