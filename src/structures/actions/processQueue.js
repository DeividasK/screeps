// @flow
import memoryHandler from 'memory';
import logger from 'logger';
import { assignBody } from 'structures/actions';
import _ from 'lodash';

export function processQueue(memory: MemoryObject, spawn: StructureSpawn) {
  const queue = memoryHandler.getQueue(memory);
  if (queue.length === 0) {
    return;
  }

  const creepSchema = queue[0];

  const canCreate = spawn.canCreateCreep(creepSchema.body);

  if (canCreate !== OK) {
    logger('Cannot create creep: ' + canCreate);
    return;
  }

  if (creepSchema.role === undefined) {
    logger('Creep role is undefined in ' + JSON.stringify(creepSchema) + '.');
    memoryHandler.clearQueue();
    return;
  }

  logger('Spawning new ' + creepSchema.role + '.');
  const creepName = spawn.createCreep(
    creepSchema.body,
    creepSchema.role + ' ' + Date.now(),
    {
      role: creepSchema.role,
    },
  );

  logger('Clearing queue');
  memoryHandler.clearQueue();
}
