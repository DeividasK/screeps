const spawn1 = Game.spawns['Spawn1'];

const actions = {
  maintain: function maintain(creepRole, count, creepBody) {
    const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole);

    if(creepsByRole.length < count && spawn1.canCreateCreep(creepBody) === OK) {
        var newName = spawn1.createCreep(creepBody, undefined, {role: creepRole});
        console.log('Spawning new ' + creepRole + ': ' + newName);
    }

  }
};

module.exports = actions;
