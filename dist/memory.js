module.exports = {
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