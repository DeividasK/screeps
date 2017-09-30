import _ from 'lodash';

// @flow
module.exports = {
  addToQueue: function addToQueue(
    creepSchema: CreepSchema,
    memory: MemoryObject,
  ): Array<CreepSchema> {
    memory.queue = memory.queue.concat(creepSchema);
    return memory.queue;
  },
  getQueue: function getQueue(memory: MemoryObject): Array<CreepSchema> {
    return memory.queue.slice();
  },
  clearQueue: function clearQueue() {
    Memory.queue = [];
    return Memory.queue.slice();
  },
  update: function(memory: MemoryObject, room: Room) {
    if (!memory.queue) {
      memory.queue = [];
    }

    if (!memory.roles) {
      const energySources = room.find(FIND_SOURCES).length;

      memory.roles = {
        harvester: energySources > 1 ? energySources : 2,
        upgrader: 1,
        builder: 0,
      };
    }

    // $FlowFixMe
    if (_.values(Game.creeps).length === _.values(memory.creeps).length) {
      return;
    }

    for (const creepName in memory.creeps) {
      if (Game.creeps[creepName] === undefined) {
        delete memory.creeps[creepName];
      }
    }
  },
};
