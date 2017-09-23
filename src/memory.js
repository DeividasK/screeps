// @flow
module.exports = {
  addToQueue: function addToQueue(
    creepSchema: CreepSchema,
    memory: MemoryObject,
  ): Array<CreepSchema> {
    return memory.queue.concat(creepSchema);
  },
  getQueue: function getQueue(memory: MemoryObject): Array<CreepSchema> {
    return memory.queue.slice();
  },
  clearQueue: function clearQueue() {
    Memory.queue = [];
    return Memory.queue.slice();
  },
  update: function(memory: MemoryObject) {
    if (!memory.queue) {
      memory.queue = [];
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
