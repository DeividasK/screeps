// @flow
import _ from 'lodash';
import logger from 'logger';
import { assignBody } from '.';

export function findNextCreepRole(
  roles: Array<CreepRole>,
  memory: MemoryObject,
): { nextCreepRole?: CreepRole, urgent: boolean } {
  const existingCreepsByRole: { [CreepRole]: number } = _.countBy(
    memory.creeps,
    creep => creep.role,
  );

  const nextCreepRole = _.find(roles, function(role: CreepRole): boolean {
    const requiredRoleCount = memory.roles[role];
    const existingRoleCount = existingCreepsByRole[role];

    return (
      (requiredRoleCount > 0 && !existingRoleCount) ||
      requiredRoleCount > existingRoleCount
    );
  });

  const urgent =
    nextCreepRole === 'harvester' && !existingCreepsByRole.harvester;

  return { nextCreepRole, urgent };
}

export function getNextCreepSchema(
  memory: MemoryObject,
  spawn: StructureSpawn,
): ?CreepSchema {
  if (spawn.spawning !== null) {
    return;
  }

  // $FlowFixMe
  const roles: Array<CreepRole> = _.keys(memory.roles);

  const { nextCreepRole, urgent } = findNextCreepRole(roles, memory);

  // Priority for harvesters
  if (memory.queue.length !== 0 && urgent && nextCreepRole) {
    logger(
      `Cleared ${JSON.stringify(
        memory.queue[0],
      )} from queue in favor of ${nextCreepRole}.`,
    );
    memory.queue = [];
  }

  if (memory.queue.length !== 0) {
    return;
  }

  if (!nextCreepRole) {
    return;
  }

  return { role: nextCreepRole, body: assignBody(spawn, urgent) };
}

// function maintain(creepRole: string) {
//   if (creepsByRole.length <= creepCount) {
//     _.forEach(creepsByRole, function renewCreep(creep) {
//       spawn1.renewCreep(creep);
//     });
//   }
// },
