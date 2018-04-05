const _ = require('lodash');

var Task = function(difficulty, urgency, reward, status){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.status = status;
}

// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed


module.exports = Task;
