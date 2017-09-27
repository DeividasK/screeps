// @flow
import _ from 'lodash';
import logger from 'logger';
import { assignBody } from '.';

export function findNextCreepRole(
  roles: Array<CreepRole>,
  memory: MemoryObject,
): CreepRole {
  // $FlowFixMe
  return _.find(roles, function(role: CreepRole): boolean {
    const requiredRoleCount = memory.roles[role];

    const existingCreepsByRole: Array<Creep> = _.filter(
      memory.creeps,
      creep => creep.role === role,
    );

    return requiredRoleCount > existingCreepsByRole.length;
  });
}

export function getNextCreepSchema(
  memory: MemoryObject,
  spawn: StructureSpawn,
): ?CreepSchema {
  if (spawn.spawning !== null) {
    logger(`Still spawning. Ticks remaining ${spawn.spawning.remainingTime}.`);
    return;
  }

  // $FlowFixMe
  const roles: Array<CreepRole> = _.keys(memory.roles);

  if (roles.length === 0) {
    throw new Error(
      `Memory contains no roles. Memory object ${JSON.stringify(memory)}`,
    );
  }

  const nextCreepRole = findNextCreepRole(roles, memory);

  if (
    memory.queue.length !== 0 &&
    nextCreepRole === 'harvester' &&
    memory.queue[0].role !== 'harvester'
  ) {
    logger(
      'Cleared ' +
        JSON.stringify(memory.queue[0]) +
        ' from queue in favor of harvester.',
    );
    memory.queue = [];
  }

  if (memory.queue.length !== 0) {
    logger(
      `Queue is not empty. Currently in queue: ` + JSON.stringify(memory.queue),
    );
    return;
  }

  if (!nextCreepRole) {
    return;
  }

  return { role: nextCreepRole, body: assignBody(spawn, nextCreepRole) };
}

// function maintain(creepRole: string) {
//   if (creepsByRole.length <= creepCount) {
//     _.forEach(creepsByRole, function renewCreep(creep) {
//       spawn1.renewCreep(creep);
//     });
//   }
// },
