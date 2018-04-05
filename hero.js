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

module.exports = Hero;
