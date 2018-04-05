var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');

describe('Hero', function(){

  var hero1;
  var task1;
  var task2;

  beforeEach(function(){
    hero1 = new Hero("Jeff", 100, "Burgers");
    task1 = new Task(6, 2, 'Sword', false);
    task2 = new Task(5, 5, 'Gold coins', false);
  })

  it('should have a name', function(){
    assert.strictEqual(hero1.name, "Jeff");
  });

  it('should have health', function(){
    assert.strictEqual(hero1.health, 100);
  });

  it('should have favourite food', function(){
    assert.strictEqual(hero1.favFood, "Burgers");
  });

  it('should be able to say their name', function(){
    assert.strictEqual(hero1.talk(), "My name is Jeff");
  });

  it('should have a list of tasks to complete', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    assert.deepStrictEqual(hero1.tasks, [task1, task2]);
  });

});
