module.exports = {
  addToQueue: (creepSchema) => {
    Memory.queue = Memory.queue.concat(creepSchema)
    return Memory.queue.shift();
  },
  getQueue: () => {
    if (!Array.isArray(Memory.queue)) {
      Memory.queue = []
    }
    return Memory.queue.shift();
  },
  clearQueue: function clearQueue() {
    Memory.queue = [];
    return Memory.queue.shift();
  },
  flushIfNecessary: function() {
    if (_.values(Game.creeps).length === _.values(Memory.creeps).length) {
      return;
    }

    for (const creepName in Memory.creeps) {
      if (Game.creeps[creepName] === undefined) {
          delete Memory.creeps[creepName];
      }
    }
  }
};
