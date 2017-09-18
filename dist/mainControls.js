const memory = require('memory');
const logger = require('logger');

// function getBodyArray(body) {
//   return body.reduce((accumulator, bodyPart) => accumulator.concat(bodyPart.type));
// }

const actions = {
  maintain: function maintain(creepRole, creepCount, creepBody) {
    const spawn1 = Game.spawns['Spawn1'];
    // Return if queue is not empty
    if (memory.getQueue().length > 0) {
      logger(creepRole + ' role check - queue is not empty.');
      return;
    }

    const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole);
    // const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole && getBodyArray(creep.body) === creepBody);
    const additionalCreepsRequired = creepCount - creepsByRole.length;

    // Return if required creep amount is reached or exceeded
    logger('Currently ' + creepsByRole.length + ' creeps with ' + creepRole + ' role and ' + JSON.stringify(creepBody) + ' body.');

    if (additionalCreepsRequired <= 0) {
      logger(creepRole + ' role check - no more creeps is required.');
      return;
    }

    memory.addToQueue({ role: creepRole, body: creepBody });

    for (const creepName in creepsByRole) {
      if (creepsByRole.length <= creepCount) {
        spawn1.renewCreep(creepsByRole[creepName]);
      }
    }
  },
  processQueue: function processQueue() {
    const spawn1 = Game.spawns['Spawn1'];
    const queue = memory.getQueue();
    if (queue.length === 0) {
      logger('Queue is empty.');
      return;
    }

    if (spawn1.spawning !== null) {
      logger('Still spawning ' + spawn1.spawning.name + '. Time remaining ' + spawn1.spawning.remainingTime + '.');
      logger('Current queue: ' + JSON.stringify(queue) + '.');
      return;
    } else {
      logger('Nothing is being spawned.');
    }

    const creepSchema = queue[0];

    const canCreate = spawn1.canCreateCreep(creepSchema.body);

    if(canCreate !== OK) {
      logger('Cannot create creep: ' + canCreate)
      return;
    }

    logger('Spawning new ' + creepSchema.role + '.');
    const creepName = spawn1.createCreep(creepSchema.body, undefined, {role: creepSchema.role});
    logger('Clearing queue');
    memory.clearQueue();
  }
};

module.exports = actions;
