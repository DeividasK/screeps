const memory = require('memory');

const spawn1 = Game.spawns['Spawn1'];

const actions = {
  maintain: function maintain(creepRole, creepCount, creepBody) {
    // Return if queue is not empty
    if (memory.getQueue().length > 0) { return; }

    const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole && creep.body === creepBody);
    const additionalCreepsRequired = creepCount - creepsByRole.length;

    // Return if required creep amount is reached or exceeded
    if (differenceFromRequiredCount <= 0) { return; }

    memory.addToQueue({ role: creepRole, body: creepBody });



    for (const creepName in creepsByRole) {
      if (creepsByRole.length <= creepCount) {
        spawn1.renewCreep(creepsByRole[creepName]);
      }
    }
  },
  processQueue: function processQueue() {
    const queue = memory.getQueue();
    if (queue.length === 0) {
      console.log('Queue is empty.');
      return;
    }

    if (spawn1.spawning !== null) {
      console.log('Still spawning ' + JSON.stringify(spawn1.spawning))
      console.log('Game time: ' + Game.time);
      return;
    }

    const canCreate = spawn1.canCreateCreep(creepBody);

    if(canCreate !== OK) {
      console.log('Cannot create creep: ' + canCreate)
      console.log('Game time: ' + Game.time);
    }

    var newName = spawn1.createCreep(creepBody, undefined, {role: creepRole});
    console.log('Spawning new ' + creepRole + ': ' + newName);
  }
};

module.exports = actions;
