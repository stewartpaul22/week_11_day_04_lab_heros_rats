const _ = require('lodash');

var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.talk = function () {
  return 'My name is ' + this.name;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

// A hero should be able to eat food, and health should go up by the replenishment value
Hero.prototype.eat = function (food) {
  this.health += food.replenishmentVal;
};

// If the food is their favourite food, their health should go up by 1.5 * value.

// A hero should be able to sort their tasks by difficulty, urgency or reward.

// A hero should be able to view tasks that are marked as completed or incomplete.


module.exports = Hero;
