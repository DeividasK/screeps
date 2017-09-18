/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const spawn1 = Game.spawns['Spawn1'];

const actions = {
  moveToSpawn: function moveToSpawn(creep) {
    return creep.moveTo(spawn1);
  },
  withdrawEnergy: function withdrawEnergy(creep) {
    const withdrawalStatus = creep.withdraw(spawn1, RESOURCE_ENERGY);

    switch(withdrawalStatus) {
      case ERR_NOT_IN_RANGE:
        return actions.moveToSpawn(creep);
      case ERR_NOT_ENOUGH_RESOURCES:
        return creep.memory.role = 'harvester';
    }
  }
};

module.exports = actions;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  addToQueue: (creepSchema) => {
    Memory.queue = Memory.queue.concat(creepSchema)
    return Memory.queue.slice();
  },
  getQueue: () => {
    if (!Array.isArray(Memory.queue)) {
      Memory.queue = []
    }
    return Memory.queue.slice();
  },
  clearQueue: function clearQueue() {
    Memory.queue = [];
    return Memory.queue.slice();
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const smallestBody = [WORK,CARRY,MOVE];
const smallCarrier = [WORK,CARRY,CARRY,CARRY,MOVE];

const initRoles = __webpack_require__(3);
const memoryHandler = __webpack_require__(1);
const mainControls = __webpack_require__(7);

module.exports.loop = function () {
    memoryHandler.flushIfNecessary();

    mainControls.maintain('harvester', 10, smallestBody);
    mainControls.maintain('upgrader', 5, smallestBody);
    mainControls.maintain('builder', 1, smallestBody);

    mainControls.processQueue();

    initRoles();
}

// Goals
// x Upgrader creep
// x Repair creeps
// x Sync with Github
// x Creeps go to other energy sources
// x Build extensions
// x Build roads
// x Build bigger creeps
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const roles = {
    harvester: __webpack_require__(4),
    upgrader: __webpack_require__(5),
    builder: __webpack_require__(6),
};

module.exports = function init() {
    for(const creepName in Game.creeps) {
        const creep = Game.creeps[creepName];
        const role = roles[creep.memory.role]

        if (role !== undefined) {
            role.run(creep);
        } else {
            console.log('Creep memory role ', creep.memory.role, ' is undefined');
        }
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const actions = __webpack_require__(0);

function moveToEnergySource(creep) {
    const sources = creep.room.find(FIND_SOURCES, {
        filter: (source) => source.energy > 0
    });
    if (sources.length === 0) return;

    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
}

function canStoreEnergy(structure) {
    return structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN;
}

function hasCapacity(structure) {
    return structure.energy < structure.energyCapacity;
}

var roleHarvester = {
  /** @param {Creep} creep **/
  run: function(creep) {
    if (creep.ticksToLive < 300) {
        return actions.moveToSpawn(creep);
    }

    if(creep.carry.energy < creep.carryCapacity) {
       return moveToEnergySource(creep);
    }

    const targetsWithCapacity = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => canStoreEnergy(structure) && hasCapacity(structure)
    });

    if(targetsWithCapacity.length > 0 && creep.transfer(targetsWithCapacity[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        return creep.moveTo(targetsWithCapacity[0]);
    }

    return actions.moveToSpawn(creep);
  }
};

module.exports = roleHarvester;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const actions = __webpack_require__(0);

const upgrader = {
	/** @param {Creep} creep **/
	run: function(creep) {
		if(creep.memory.upgrading && creep.carry.energy == 0) {
			creep.memory.upgrading = false;
	  }

	  if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
		  creep.memory.upgrading = true;
	  }

	  if(creep.memory.upgrading) {
			if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
				return creep.moveTo(creep.room.controller);
			}
		}

		return actions.withdrawEnergy(creep);
  }
};

module.exports = upgrader;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const actions = __webpack_require__(0);

var builder = {
	run: function(creep) {
		if(creep.memory.canWork && creep.carry.energy === 0) {
			creep.memory.canWork = false;
	  }

	  if(!creep.memory.canWork && creep.carry.energy === creep.carryCapacity) {
		  creep.memory.canWork = true;
	  }

    const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);

	  if(creep.memory.canWork && creep.build(constructionSites[0]) == ERR_NOT_IN_RANGE) {
			return creep.moveTo(constructionSites[0]);
		}

    return actions.withdrawEnergy(creep);
  }
};

module.exports = builder;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const memory = __webpack_require__(1);
const logger = __webpack_require__(8);

// function getBodyArray(body) {
//   return body.reduce((accumulator, bodyPart) => accumulator.concat(bodyPart.type));
// }

const actions = {
  maintain: function maintain(creepRole, creepCount, creepBody) {
    const spawn1 = Game.spawns['Spawn1'];
    // Return if queue is not empty
    if (memory.getQueue().length > 0) {
      logger(creepRole + ' role check - queue is not empty.');
      return;
    }

    const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole);
    // const creepsByRole = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole && getBodyArray(creep.body) === creepBody);
    const additionalCreepsRequired = creepCount - creepsByRole.length;

    // Return if required creep amount is reached or exceeded
    logger('Currently ' + creepsByRole.length + ' creeps with ' + creepRole + ' role and ' + JSON.stringify(creepBody) + ' body.');

    if (additionalCreepsRequired <= 0) {
      logger(creepRole + ' role check - no more creeps is required.');
      return;
    }

    memory.addToQueue({ role: creepRole, body: creepBody });

    for (const creepName in creepsByRole) {
      if (creepsByRole.length <= creepCount) {
        spawn1.renewCreep(creepsByRole[creepName]);
      }
    }
  },
  processQueue: function processQueue() {
    const spawn1 = Game.spawns['Spawn1'];
    const queue = memory.getQueue();
    if (queue.length === 0) {
      logger('Queue is empty.');
      return;
    }

    if (spawn1.spawning !== null) {
      logger('Still spawning ' + spawn1.spawning.name + '. Time remaining ' + spawn1.spawning.remainingTime + '.');
      logger('Current queue: ' + JSON.stringify(queue) + '.');
      return;
    } else {
      logger('Nothing is being spawned.');
    }

    const creepSchema = queue[0];

    const canCreate = spawn1.canCreateCreep(creepSchema.body);

    if(canCreate !== OK) {
      logger('Cannot create creep: ' + canCreate)
      return;
    }

    logger('Spawning new ' + creepSchema.role + '.');
    const creepName = spawn1.createCreep(creepSchema.body, undefined, {role: creepSchema.role});
    logger('Clearing queue');
    memory.clearQueue();
  }
};

module.exports = actions;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function logger(message) {
  console.log(Game.time + ': ' + message)
}


/***/ })
/******/ ]);