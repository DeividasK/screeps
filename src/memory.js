// @flow
module.exports = {
  addToQueue: (creepSchema: CreepSchema) => {
    Memory.queue = Memory.queue.concat(creepSchema);
    return Memory.queue.slice();
  },
  getQueue: (memory: MemoryObject) => {
    if (!Array.isArray(memory.queue)) {
      memory.queue = [];
    }
    return memory.queue.slice();
  },
  clearQueue: function clearQueue() {
    Memory.queue = [];
    return Memory.queue.slice();
  },
  flushIfNecessary: function() {
    // $FlowFixMe
    if (_.values(Game.creeps).length === _.values(Memory.creeps).length) {
      return;
    }

    for (const creepName in Memory.creeps) {
      if (Game.creeps[creepName] === undefined) {
        delete Memory.creeps[creepName];
      }
    }
  },
};
