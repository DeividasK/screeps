module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignBody = __webpack_require__(18);

Object.defineProperty(exports, 'assignBody', {
  enumerable: true,
  get: function get() {
    return _assignBody.assignBody;
  }
});

var _getNextCreepSchema = __webpack_require__(19);

Object.defineProperty(exports, 'getNextCreepSchema', {
  enumerable: true,
  get: function get() {
    return _getNextCreepSchema.getNextCreepSchema;
  }
});

var _processQueue = __webpack_require__(20);

Object.defineProperty(exports, 'processQueue', {
  enumerable: true,
  get: function get() {
    return _processQueue.processQueue;
  }
});

var _canBuild = __webpack_require__(21);

Object.defineProperty(exports, 'canBuild', {
  enumerable: true,
  get: function get() {
    return _canBuild.canBuild;
  }
});

var _canBuildOn = __webpack_require__(22);

Object.defineProperty(exports, 'canBuildOn', {
  enumerable: true,
  get: function get() {
    return _canBuildOn.canBuildOn;
  }
});

var _createArea = __webpack_require__(7);

Object.defineProperty(exports, 'createArea', {
  enumerable: true,
  get: function get() {
    return _createArea.createArea;
  }
});

var _createConstructionSites = __webpack_require__(23);

Object.defineProperty(exports, 'createConstructionSites', {
  enumerable: true,
  get: function get() {
    return _createConstructionSites.createConstructionSites;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _harvestEnergy = __webpack_require__(12);

var _harvestEnergy2 = _interopRequireDefault(_harvestEnergy);

var _storeEnergy = __webpack_require__(13);

var _storeEnergy2 = _interopRequireDefault(_storeEnergy);

var _withdrawEnergy = __webpack_require__(15);

var _withdrawEnergy2 = _interopRequireDefault(_withdrawEnergy);

var _moveToSpawn = __webpack_require__(3);

var _moveToSpawn2 = _interopRequireDefault(_moveToSpawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { harvestEnergy: _harvestEnergy2.default, storeEnergy: _storeEnergy2.default, withdrawEnergy: _withdrawEnergy2.default, moveToSpawn: _moveToSpawn2.default };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moveToSpawn;
function moveToSpawn(creep) {
  var spawn1 = Game.spawns['Spawn1'];
  return creep.moveTo(spawn1);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateWorkStatus;
function updateWorkStatus(creep) {
  if (creep.memory.hasEnergy && creep.carry.energy === 0) {
    creep.memory.hasEnergy = false;
  }

  if (!creep.memory.hasEnergy && creep.carry.energy === creep.carryCapacity) {
    creep.memory.hasEnergy = true;
  }

  return creep.memory.hasEnergy;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logger;
function logger(message) {
  console.log(Game.time + ': ' + message);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  addToQueue: function addToQueue(creepSchema, memory) {
    memory.queue = memory.queue.concat(creepSchema);
    return memory.queue;
  },
  getQueue: function getQueue(memory) {
    return memory.queue.slice();
  },
  clearQueue: function clearQueue() {
    Memory.queue = [];
    return Memory.queue.slice();
  },
  update: function update(memory) {
    if (!memory.queue) {
      memory.queue = [];
    }

    // $FlowFixMe
    if (_lodash2.default.values(Game.creeps).length === _lodash2.default.values(memory.creeps).length) {
      return;
    }

    for (var creepName in memory.creeps) {
      if (Game.creeps[creepName] === undefined) {
        delete memory.creeps[creepName];
      }
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createArea = createArea;
function createArea(centerPosition, radius) {
  var top = centerPosition.y - radius;
  var bottom = centerPosition.y + radius;
  var left = centerPosition.x - radius;
  var right = centerPosition.x + radius;

  var min = 0;
  var max = 50;

  return {
    top: top >= min ? top : min,
    bottom: bottom <= max ? bottom : max,
    left: left >= min ? left : min,
    right: right <= max ? right : max
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loop = undefined;

var _role = __webpack_require__(9);

var _role2 = _interopRequireDefault(_role);

var _memory = __webpack_require__(6);

var _memory2 = _interopRequireDefault(_memory);

var _actions = __webpack_require__(1);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loop() {
  _memory2.default.update(Memory);

  var nextCreepSchema = (0, _actions.getNextCreepSchema)(Memory, Game.spawns['Spawn1']);

  (0, _actions.createConstructionSites)(STRUCTURE_EXTENSION, Game);

  // JSON.stringify(_.values(Game.rooms)[0].lookForAtArea(LOOK_STRUCTURES, 43, 30, 45, 32, true))
  // JSON.stringify(_.values(Game.rooms)[0].lookForAtArea(LOOK_TERRAIN, 43, 30, 45, 32, true))

  /*
   // Find empty space to build on
   for each item in area check check surounding area (3 x 3 total) and see if more than 3 terrain squares are available
  if yes, build a construction site for spawn
    */

  if (nextCreepSchema) {
    _memory2.default.addToQueue(nextCreepSchema, Memory);
  }
  (0, _actions.processQueue)(Memory, Game.spawns['Spawn1']);

  (0, _role2.default)(Game);
}

exports.loop = loop;

// Goals
// - Update upgrader role to harvest instead of withdrawing
// - Automatically add extension construction sites
// - Updae builder role to harvest instead of withdrawing
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _roles = __webpack_require__(10);

var roles = _interopRequireWildcard(_roles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function init(game) {
  for (var creepName in game.creeps) {
    var creep = game.creeps[creepName];
    var role = roles[creep.memory.role];

    if (role !== undefined) {
      role.run(creep);
    } else {
      console.log('Creep memory role ', creep.memory.role, ' is undefined');
    }
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upgrader = exports.harvester = exports.builder = undefined;

var _builder = __webpack_require__(11);

var _builder2 = _interopRequireDefault(_builder);

var _harvester = __webpack_require__(16);

var _harvester2 = _interopRequireDefault(_harvester);

var _upgrader = __webpack_require__(17);

var _upgrader2 = _interopRequireDefault(_upgrader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.builder = _builder2.default;
exports.harvester = _harvester2.default;
exports.upgrader = _upgrader2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actions = __webpack_require__(2);

var _actions2 = _interopRequireDefault(_actions);

var _updateWorkStatus = __webpack_require__(4);

var _updateWorkStatus2 = _interopRequireDefault(_updateWorkStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builder = {
	run: function run(creep) {
		var status = void 0;
		(0, _updateWorkStatus2.default)(creep);

		if (!creep.memory.hasEnergy) {
			return _actions2.default.withdrawEnergy(creep);
		}

		// Try to repair first
		var repairSites = creep.room.find(FIND_MY_STRUCTURES, { filter: function filter(structure) {
				return structure.hits < structure.hitsMax / 3;
			} });

		if (repairSites.length > 0) {
			status = creep.repair(repairSites[0]);

			if (status === ERR_NOT_IN_RANGE) {
				return creep.moveTo(repairSites[0]);
			}
		}

		// Look for construction sites
		var constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);

		if (constructionSites.length > 0) {
			status = creep.build(constructionSites[0]);

			if (status === ERR_NOT_IN_RANGE) {
				return creep.moveTo(constructionSites[0]);
			}
		}
	}
};

module.exports = builder;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = harvestEnergy;
function harvestEnergy(creep) {
    var source = creep.pos.findClosestByPath(FIND_SOURCES, {
        filter: function filter(source) {
            return source !== undefined && source.energy > 0;
        }
    });

    if (source === null) return;

    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
    }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = storeEnergy;

var _structure = __webpack_require__(14);

var structure = _interopRequireWildcard(_structure);

var _moveToSpawn = __webpack_require__(3);

var _moveToSpawn2 = _interopRequireDefault(_moveToSpawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function storeEnergy(creep) {
  var targetWithCapacity = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
    filter: function filter(target) {
      return structure.canStoreEnergy(target) && structure.hasCapacity(target);
    }
  });

  if (targetWithCapacity === null) {
    return (0, _moveToSpawn2.default)(creep);
  }

  if (creep.transfer(targetWithCapacity, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    return creep.moveTo(targetWithCapacity);
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canStoreEnergy = canStoreEnergy;
exports.hasCapacity = hasCapacity;
function canStoreEnergy(structure) {
    return structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN;
}

function hasCapacity(structure) {
    return structure.energy < structure.energyCapacity;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withdrawEnergy;

var _moveToSpawn = __webpack_require__(3);

var _moveToSpawn2 = _interopRequireDefault(_moveToSpawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withdrawEnergy(creep) {
  var spawn1 = Game.spawns['Spawn1'];
  var withdrawalStatus = creep.withdraw(spawn1, RESOURCE_ENERGY);

  switch (withdrawalStatus) {
    case ERR_NOT_IN_RANGE:
      return (0, _moveToSpawn2.default)(creep);
    case ERR_NOT_ENOUGH_RESOURCES:
      return creep.memory.role = 'harvester';
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

var _actions2 = _interopRequireDefault(_actions);

var _updateWorkStatus = __webpack_require__(4);

var _updateWorkStatus2 = _interopRequireDefault(_updateWorkStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  run: function run(creep) {
    if (creep.ticksToLive < 50) {
      return _actions2.default.moveToSpawn(creep);
    }

    (0, _updateWorkStatus2.default)(creep);

    if (!creep.memory.hasEnergy) {
      return _actions2.default.harvestEnergy(creep);
    }

    return _actions2.default.storeEnergy(creep);
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(2);

var _actions2 = _interopRequireDefault(_actions);

var _updateWorkStatus = __webpack_require__(4);

var _updateWorkStatus2 = _interopRequireDefault(_updateWorkStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(creep) {
	var status = void 0;
	(0, _updateWorkStatus2.default)(creep);

	if (!creep.memory.hasEnergy) {
		return _actions2.default.withdrawEnergy(creep);
	}

	status = creep.upgradeController(creep.room.controller);

	if (status === ERR_NOT_IN_RANGE) {
		return creep.moveTo(creep.room.controller);
	}
}

exports.default = { run: run };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creepBodies = undefined;
exports.calculateBodyCost = calculateBodyCost;
exports.findBiggestCreatableBody = findBiggestCreatableBody;
exports.assignBody = assignBody;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Build cost / weight (empty) / weight (loaded)
var creepBodies = exports.creepBodies = [[WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], // 500 / 2 / 6
[WORK, CARRY, CARRY, CARRY, MOVE], // 300 / 1 / 4
[WORK, CARRY, MOVE]];
function calculateBodyCost(bodyPartsArray) {
  return _lodash2.default.reduce(bodyPartsArray, function (sum, bodyPart) {
    return sum + BODYPART_COST[bodyPart];
  }, 0);
}

function findBiggestCreatableBody(availableEnergyCapacity) {
  // $FlowFixMe
  return _lodash2.default.find(creepBodies, function (bodyPartsArray) {
    return calculateBodyCost(bodyPartsArray) < availableEnergyCapacity;
  });
}

function assignBody(spawn) {
  return findBiggestCreatableBody(spawn.room.energyCapacityAvailable);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNextCreepRole = findNextCreepRole;
exports.getNextCreepSchema = getNextCreepSchema;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(5);

var _logger2 = _interopRequireDefault(_logger);

var _2 = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findNextCreepRole(roles, memory) {
  // $FlowFixMe
  return _lodash2.default.find(roles, function (role) {
    var requiredRoleCount = memory.roles[role];
    var existingCreepsByRole = _lodash2.default.filter(memory.creeps, function (creep) {
      return creep.role === role;
    });

    return requiredRoleCount > existingCreepsByRole.length;
  });
}
function getNextCreepSchema(memory, spawn) {
  if (spawn.spawning !== null) {
    (0, _logger2.default)('Still spawning. Ticks remaining ' + spawn.spawning.remainingTime + '.');
    return;
  }

  // $FlowFixMe
  var roles = _lodash2.default.keys(memory.roles);

  if (roles.length === 0) {
    throw new Error('Memory contains no roles. Memory object ' + JSON.stringify(memory));
  }

  var nextCreepRole = findNextCreepRole(roles, memory);

  if (!nextCreepRole) {
    return;
  }

  return { role: nextCreepRole, body: (0, _2.assignBody)(spawn) };
}

// function maintain(creepRole: string) {
//   if (creepsByRole.length <= creepCount) {
//     _.forEach(creepsByRole, function renewCreep(creep) {
//       spawn1.renewCreep(creep);
//     });
//   }
//
//   // Return if queue is not empty
//   if (memory.getQueue().length > 0) {
//     logger(creepRole + ' role check - queue is not empty.');
//     return;
//   }
//
//   const additionalCreepsRequired = creepCount - creepsByRole.length;
//
//   // Return if required creep amount is reached or exceeded
//   logger(
//     'Currently ' +
//       creepsByRole.length +
//       ' creeps with ' +
//       creepRole +
//       ' role and ' +
//       JSON.stringify(creepBody) +
//       ' body.',
//   );
//   if (additionalCreepsRequired <= 0) {
//     logger(creepRole + ' role check - no more creeps is required.');
//     return;
//   }
//
//   memory.addToQueue({ role: creepRole, body: creepBody });
// },

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processQueue = processQueue;

var _memory = __webpack_require__(6);

var _memory2 = _interopRequireDefault(_memory);

var _logger = __webpack_require__(5);

var _logger2 = _interopRequireDefault(_logger);

var _actions = __webpack_require__(1);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processQueue(memory, spawn) {
  var queue = _memory2.default.getQueue(memory);
  if (queue.length === 0) {
    return;
  }

  var creepSchema = queue[0];

  var canCreate = spawn.canCreateCreep(creepSchema.body);

  if (canCreate !== OK) {
    (0, _logger2.default)('Cannot create creep: ' + canCreate);
    return;
  }

  (0, _logger2.default)('Spawning new ' + creepSchema.role + '.');
  var creepName = spawn.createCreep(creepSchema.body, undefined, {
    role: creepSchema.role
  });

  (0, _logger2.default)('Clearing queue');
  _memory2.default.clearQueue();
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canBuild = canBuild;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canBuild(room, structureType) {
  var controllerLevel = room.controller.level;
  var allowedAmountForStructureTypes = CONTROLLER_STRUCTURES[structureType][controllerLevel];

  if (allowedAmountForStructureTypes === 0) {
    return;
  }

  var existingExtensions = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: structureType }
  });
  if (existingExtensions.length === allowedAmountForStructureTypes) {
    return;
  }

  var constructedExtensions = room.find(FIND_MY_CONSTRUCTION_SITES, {
    filter: { structureType: structureType }
  });

  var availableAmountForStructureType = allowedAmountForStructureTypes - existingExtensions.length - constructedExtensions.length;

  return availableAmountForStructureType;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canBuildOn = canBuildOn;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _createArea = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canBuildOn(room, pos) {
  /*
    . x .
    . o .
    x x x
    ^ - should be false
  */
  var maxObstacles = 3;

  var areaDimensions = (0, _createArea.createArea)(pos, 1);
  // $FlowFixMe
  var structuresInArea = room.lookForAtArea(LOOK_STRUCTURES, areaDimensions.top, areaDimensions.left, areaDimensions.bottom, areaDimensions.right, true);

  if (structuresInArea.length > maxObstacles) {
    return false;
  }

  // $FlowFixMe
  var constructionSitesInArea = room.lookForAtArea(LOOK_CONSTRUCTION_SITES, areaDimensions.top, areaDimensions.left, areaDimensions.bottom, areaDimensions.right, true);

  if (constructionSitesInArea.length + structuresInArea.length > maxObstacles) {
    return false;
  }

  var terrainInArea = room.lookForAtArea(LOOK_TERRAIN, areaDimensions.top, areaDimensions.left, areaDimensions.bottom, areaDimensions.right, true);
  var wallsInArea = _lodash2.default.filter(terrainInArea, { terrain: 'wall' });
  var obstaclesInArea = structuresInArea.length + constructionSitesInArea.length + wallsInArea.length;

  if (obstaclesInArea > maxObstacles) {
    return false;
  }

  return true;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConstructionSites = createConstructionSites;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(5);

var _logger2 = _interopRequireDefault(_logger);

var _2 = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createConstructionSites(type, game) {
  var rooms = _lodash2.default.values(game.rooms);
  var room = rooms[0];

  var availableAmountForStructureType = (0, _2.canBuild)(room, type);

  if (!availableAmountForStructureType) {
    (0, _logger2.default)('No available for ' + type);
    return false;
  }
  (0, _logger2.default)('Available amount for ' + type + ' is ' + availableAmountForStructureType);

  var spawns = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_SPAWN }
  });
  (0, _logger2.default)('Spawns are ' + JSON.stringify(spawns));

  var spawn = spawns[0];
  (0, _logger2.default)('Spawn is ' + JSON.stringify(spawn));

  var area = (0, _2.createArea)(spawn.pos, 10);

  (0, _logger2.default)('Area is ' + JSON.stringify(area));

  var areaArray = room.lookForAtArea(LOOK_TERRAIN, area.top, area.left, area.bottom, area.right, true);

  var suitableArea = _lodash2.default.find(areaArray, function (roomPosition) {
    return (0, _2.canBuildOn)(room, roomPosition);
  });

  if (suitableArea === undefined) {
    (0, _logger2.default)('Suitable area was not found in area array: ' + JSON.stringify(areaArray));
    return;
  }

  (0, _logger2.default)('Suitable area ' + JSON.stringify(suitableArea));

  var status = room.createConstructionSite(suitableArea.x, suitableArea.y, type);

  if (status !== OK) {
    (0, _logger2.default)('Status: ' + status);
  }
}

/***/ })
/******/ ]);