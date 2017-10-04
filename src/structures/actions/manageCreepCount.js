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

  if (
    spawn.room.storage.store[RESOURCE_ENERGY] > 500000 &&
    memory.roles.upgrader < 2
  ) {
    memory.roles.upgrader = 2;
    logger(
      'More than 500k energy stored. Less than 2 upgraders. Creating an upgrader.',
    );
  }

  if (
    spawn.room.storage.store[RESOURCE_ENERGY] < 300000 &&
    memory.roles.upgrader > 1
  ) {
    memory.roles.upgrader = 1;
    logger(
      'Found more than 1 upgrader. Less than 300k energy in store. Setting upgraders to 1.',
    );
  }
}
