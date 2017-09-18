const spawn1 = Game.spawns['Spawn1'];

const actions = {
  maintain: function maintain(creepRole, creepCount, creepBody) {
    const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole);

    if(creepsByRole.length < creepCount && spawn1.spawning === null && spawn1.canCreateCreep(creepBody) === OK) {
        ;
        var newName = spawn1.createCreep(creepBody, undefined, {role: creepRole});
        console.log('Spawning new ' + creepRole + ': ' + newName);
    }

    _.find(Game.creeps, (creep) => creep.memory.role === creepRole);

    for (const creepName in creepsByRole) {
      if (creepsByRole.length <= creepCount) {
        spawn1.renewCreep(creepsByRole[creepName]);
      }
    }
  }
};

module.exports = actions;
