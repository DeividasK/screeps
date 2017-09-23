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

  if (!nextCreepRole) {
    logger('No creeps are required.');
    return;
  }

  return { role: nextCreepRole, body: assignBody(spawn) };
}

// function maintain(creepRole: string) {
//   if (creepsByRole.length <= creepCount) {
//     _.forEach(creepsByRole, function renewCreep(creep) {
//       spawn1.renewCreep(creep);
//     });
//   }
//
//   // Return if queue is not empty
//   if (memory.getQueue().length > 0) {
//     logger(creepRole + ' role check - queue is not empty.');
//     return;
//   }
//
//   const additionalCreepsRequired = creepCount - creepsByRole.length;
//
//   // Return if required creep amount is reached or exceeded
//   logger(
//     'Currently ' +
//       creepsByRole.length +
//       ' creeps with ' +
//       creepRole +
//       ' role and ' +
//       JSON.stringify(creepBody) +
//       ' body.',
//   );
//   if (additionalCreepsRequired <= 0) {
//     logger(creepRole + ' role check - no more creeps is required.');
//     return;
//   }
//
//   memory.addToQueue({ role: creepRole, body: creepBody });
// },
