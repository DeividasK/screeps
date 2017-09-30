// @flow
import _ from 'lodash';
import logger from 'logger';

export function manageCreepCount(memory: MemoryObject, spawn: StructureSpawn) {
  const constructionSites = spawn.room.find(FIND_CONSTRUCTION_SITES);

  if (memory.roles.builder < 1 && constructionSites.length > 0) {
    memory.roles.builder = 1;
    logger('0 builders. Found construction sites. Creating a builder.');
  }

  if (memory.roles.builder > 0 && constructionSites.length === 0) {
    memory.roles.builder = 0;
    logger('Found builders. 0 construction sites. Removing builders.');
  }
}
