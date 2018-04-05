var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');

describe('Hero', function(){

  var hero1;
  var task1;
  var task2;
  var food1;

  beforeEach(function(){
    hero1 = new Hero("Jeff", 100, "Burgers");
    task1 = new Task(6, 2, 'Sword', false);
    task2 = new Task(5, 5, 'Gold coins', false);
    food1 = new Food('Bread', 3);
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

  // A hero should be able to eat food, and health should go up by the replenishment value
  it('should be able to eat food', function(){
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 103);
  });

  // If the food is their favourite food, their health should go up by 1.5 * value.

  // A hero should be able to sort their tasks by difficulty, urgency or reward.

  // A hero should be able to view tasks that are marked as completed or incomplete.


});
