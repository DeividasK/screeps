const memory = require('memory');

const spawn1 = Game.spawns['Spawn1'];

const actions = {
  maintain: function maintain(creepRole, creepCount, creepBody) {
    // Return if queue is not empty
    if (memory.getQueue().length > 0) { return; }

    const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole && creep.body === creepBody);
    const additionalCreepsRequired = creepCount - creepsByRole.length;

    // Return if required creep amount is reached or exceeded
    if (additionalCreepsRequired <= 0) { return; }

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
      console.log('Still spawning ' + spawn1.spawning.name + '.');
      console.log('Time remaining ' + spawn1.spawning.remainingTime + '.');
      console.log('Current queue: ' + JSON.stringify(queue) + '.');
      console.log('Game time: ' + Game.time);
      return;
    }

    const creepSchema = queue[0];

    const canCreate = spawn1.canCreateCreep(creepSchema.body);

    if(canCreate !== OK) {
      console.log('Cannot create creep: ' + canCreate)
      console.log('Game time: ' + Game.time);
    }

    const creepName = spawn1.createCreep(creepSchema.body, undefined, {role: creepSchema.role});
    console.log('Spawning new ' + creepSchema.role + ': ' + creepName);
    memory.clearQueue();
  }
};

module.exports = actions;
