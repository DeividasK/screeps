// @flow
import memory from 'memory';
import logger from 'logger';
import { assignBody } from 'structures/actions';
import _ from 'lodash';

const actions = {
  processQueue: function processQueue() {
    const spawn1 = Game.spawns['Spawn1'];
    const queue = memory.getQueue(Memory);
    if (queue.length === 0) {
      logger('Queue is empty.');
      return;
    }

    if (spawn1.spawning !== null) {
      logger(
        'Still spawning ' +
          spawn1.spawning.name +
          '. Time remaining ' +
          spawn1.spawning.remainingTime +
          '.',
      );
      logger('Current queue: ' + JSON.stringify(queue) + '.');
      return;
    } else {
      logger('Nothing is being spawned.');
    }

    const creepSchema = queue[0];

    const canCreate = spawn1.canCreateCreep(creepSchema.body);

    if (canCreate !== OK) {
      logger('Cannot create creep: ' + canCreate);
      return;
    }

    logger('Spawning new ' + creepSchema.role + '.');
    const creepName = spawn1.createCreep(creepSchema.body, undefined, {
      role: creepSchema.role,
    });
    logger('Clearing queue');
    memory.clearQueue();
  },
};

module.exports = actions;
