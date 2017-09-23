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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _harvestEnergy = __webpack_require__(9);

var _harvestEnergy2 = _interopRequireDefault(_harvestEnergy);

var _storeEnergy = __webpack_require__(10);

var _storeEnergy2 = _interopRequireDefault(_storeEnergy);

var _withdrawEnergy = __webpack_require__(12);

var _withdrawEnergy2 = _interopRequireDefault(_withdrawEnergy);

var _moveToSpawn = __webpack_require__(1);

var _moveToSpawn2 = _interopRequireDefault(_moveToSpawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { harvestEnergy: _harvestEnergy2.default, storeEnergy: _storeEnergy2.default, withdrawEnergy: _withdrawEnergy2.default, moveToSpawn: _moveToSpawn2.default };

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  addToQueue: function addToQueue(creepSchema) {
    Memory.queue = Memory.queue.concat(creepSchema);
    return Memory.queue.slice();
  },
  getQueue: function getQueue() {
    if (!Array.isArray(Memory.queue)) {
      Memory.queue = [];
    }
    return Memory.queue.slice();
  },
  clearQueue: function clearQueue() {
    Memory.queue = [];
    return Memory.queue.slice();
  },
  flushIfNecessary: function flushIfNecessary() {
    // $FlowFixMe
    if (_.values(Game.creeps).length === _.values(Memory.creeps).length) {
      return;
    }

    for (var creepName in Memory.creeps) {
      if (Game.creeps[creepName] === undefined) {
        delete Memory.creeps[creepName];
      }
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loop = undefined;

var _role = __webpack_require__(6);

var _role2 = _interopRequireDefault(_role);

var _memory = __webpack_require__(3);

var _memory2 = _interopRequireDefault(_memory);

var _mainControls = __webpack_require__(15);

var _mainControls2 = _interopRequireDefault(_mainControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loop() {
  _memory2.default.flushIfNecessary();

  _mainControls2.default.maintain('harvester');
  _mainControls2.default.maintain('upgrader');
  _mainControls2.default.maintain('builder');

  _mainControls2.default.processQueue();

  (0, _role2.default)();
}
exports.loop = loop;

// Goals
// x Add flow
// x Update all syntax
// x Folders
// - Withdraw from the nearest storage
// - Tests
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = init;

var _roles = __webpack_require__(7);

var roles = _interopRequireWildcard(_roles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function init() {
    for (var creepName in Game.creeps) {
        var creep = Game.creeps[creepName];
        var role = roles[creep.memory.role];

        if (role !== undefined) {
            role.run(creep);
        } else {
            console.log('Creep memory role ', creep.memory.role, ' is undefined');
        }
    }
}
;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upgrader = exports.harvester = exports.builder = undefined;

var _builder = __webpack_require__(8);

var _builder2 = _interopRequireDefault(_builder);

var _harvester = __webpack_require__(13);

var _harvester2 = _interopRequireDefault(_harvester);

var _upgrader = __webpack_require__(14);

var _upgrader2 = _interopRequireDefault(_upgrader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.builder = _builder2.default;
exports.harvester = _harvester2.default;
exports.upgrader = _upgrader2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actions = __webpack_require__(0);

var _actions2 = _interopRequireDefault(_actions);

var _updateWorkStatus = __webpack_require__(2);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = storeEnergy;

var _structure = __webpack_require__(11);

var structure = _interopRequireWildcard(_structure);

var _moveToSpawn = __webpack_require__(1);

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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withdrawEnergy;

var _moveToSpawn = __webpack_require__(1);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

var _actions2 = _interopRequireDefault(_actions);

var _updateWorkStatus = __webpack_require__(2);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(0);

var _actions2 = _interopRequireDefault(_actions);

var _updateWorkStatus = __webpack_require__(2);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _memory = __webpack_require__(3);

var _memory2 = _interopRequireDefault(_memory);

var _logger = __webpack_require__(16);

var _logger2 = _interopRequireDefault(_logger);

var _actions = __webpack_require__(17);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasSameBody(body1, body2) {
  return _lodash2.default.isEqual(_lodash2.default.map(body1, 'type'), body2);
}

var actions = {
  maintain: function maintain(creepRole) {
    var spawn1 = Game.spawns['Spawn1'];
    var creepBody = (0, _actions.assignBody)(spawn1);
    var creepCount = Memory.roles[creepRole];

    var creepsByRole = _lodash2.default.filter(Game.creeps, function (creep) {
      return creep.memory.role === creepRole && hasSameBody(creep.body, creepBody);
    });

    if (creepsByRole.length <= creepCount) {
      _lodash2.default.forEach(creepsByRole, function renewCreep(creep) {
        spawn1.renewCreep(creep);
      });
    }

    // Return if queue is not empty
    if (_memory2.default.getQueue().length > 0) {
      (0, _logger2.default)(creepRole + ' role check - queue is not empty.');
      return;
    }

    var additionalCreepsRequired = creepCount - creepsByRole.length;

    // Return if required creep amount is reached or exceeded
    (0, _logger2.default)('Currently ' + creepsByRole.length + ' creeps with ' + creepRole + ' role and ' + JSON.stringify(creepBody) + ' body.');
    if (additionalCreepsRequired <= 0) {
      (0, _logger2.default)(creepRole + ' role check - no more creeps is required.');
      return;
    }

    _memory2.default.addToQueue({ role: creepRole, body: creepBody });
  },
  processQueue: function processQueue() {
    var spawn1 = Game.spawns['Spawn1'];
    var queue = _memory2.default.getQueue();
    if (queue.length === 0) {
      (0, _logger2.default)('Queue is empty.');
      return;
    }

    if (spawn1.spawning !== null) {
      (0, _logger2.default)('Still spawning ' + spawn1.spawning.name + '. Time remaining ' + spawn1.spawning.remainingTime + '.');
      (0, _logger2.default)('Current queue: ' + JSON.stringify(queue) + '.');
      return;
    } else {
      (0, _logger2.default)('Nothing is being spawned.');
    }

    var creepSchema = queue[0];

    var canCreate = spawn1.canCreateCreep(creepSchema.body);

    if (canCreate !== OK) {
      (0, _logger2.default)('Cannot create creep: ' + canCreate);
      return;
    }

    (0, _logger2.default)('Spawning new ' + creepSchema.role + '.');
    var creepName = spawn1.createCreep(creepSchema.body, undefined, {
      role: creepSchema.role
    });
    (0, _logger2.default)('Clearing queue');
    _memory2.default.clearQueue();
  }
};

module.exports = actions;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creepBodies = undefined;
exports.calculateBodyCost = calculateBodyCost;
exports.findBiggestCreatableBody = findBiggestCreatableBody;
exports.assignBody = assignBody;

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// type CreepRole = 'harvester' | 'builder' | 'upgrader';

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

/***/ })
/******/ ]);