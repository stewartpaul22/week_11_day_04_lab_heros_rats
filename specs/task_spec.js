var assert = require('assert');
var Task = require('../task.js');

describe('Task', function(){

  var task1;

  beforeEach(function(){
    task1 = new Task(6, 2, 'Sword', false);
  })

  it('should have a difficulty level', function(){
    assert.strictEqual(task1.difficulty, 6);
  });

  it('should have and urgency level', function(){
      assert.strictEqual(task1.urgency, 2);
  });

  it('should have a reward', function(){
    assert.strictEqual(task1.reward, 'Sword');
  });

  it('should be able to update status', function(){
    task1.complete();
    assert.strictEqual(task1.status, true);
  });

});
