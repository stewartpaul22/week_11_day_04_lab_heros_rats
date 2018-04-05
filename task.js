const _ = require('lodash');

var Task = function(difficulty, urgency, reward, status){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.status = status;
}

Task.prototype.complete = function () {
  this.status = true;
};

module.exports = Task;
