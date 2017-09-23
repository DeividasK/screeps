// @flow
import memoryHandler from 'memory';
import logger from 'logger';
import { assignBody } from 'structures/actions';
import _ from 'lodash';

export function processQueue(memory: MemoryObject, spawn: StructureSpawn) {
  const queue = memoryHandler.getQueue(memory);
  if (queue.length === 0) {
    logger('Queue is empty.');
    return;
  }

  const creepSchema = queue[0];

  const canCreate = spawn.canCreateCreep(creepSchema.body);

  if (canCreate !== OK) {
    logger('Cannot create creep: ' + canCreate);
    return;
  }

  logger('Spawning new ' + creepSchema.role + '.');
  const creepName = spawn.createCreep(creepSchema.body, undefined, {
    role: creepSchema.role,
  });

  logger('Clearing queue');
  memoryHandler.clearQueue();
}
