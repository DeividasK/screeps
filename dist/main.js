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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

var _assignBody = __webpack_require__(19);

Object.defineProperty(exports, 'assignBody', {
  enumerable: true,
  get: function get() {
    return _assignBody.assignBody;
  }
});

var _getNextCreepSchema = __webpack_require__(20);

Object.defineProperty(exports, 'getNextCreepSchema', {
  enumerable: true,
  get: function get() {
    return _getNextCreepSchema.getNextCreepSchema;
  }
});

var _processQueue = __webpack_require__(21);

Object.defineProperty(exports, 'processQueue', {
  enumerable: true,
  get: function get() {
    return _processQueue.processQueue;
  }
});

var _canBuild = __webpack_require__(22);

Object.defineProperty(exports, 'canBuild', {
  enumerable: true,
  get: function get() {
    return _canBuild.canBuild;
  }
});

var _canBuildOn = __webpack_require__(23);

Object.defineProperty(exports, 'canBuildOn', {
  enumerable: true,
  get: function get() {
    return _canBuildOn.canBuildOn;
  }
});

var _createConstructionSites = __webpack_require__(24);

Object.defineProperty(exports, 'createConstructionSites', {
  enumerable: true,
  get: function get() {
    return _createConstructionSites.createConstructionSites;
  }
});

var _updateCreepCount = __webpack_require__(25);

Object.defineProperty(exports, 'updateCreepCount', {
  enumerable: true,
  get: function get() {
    return _updateCreepCount.updateCreepCount;
  }
});

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _harvestEnergy = __webpack_require__(13);

var _harvestEnergy2 = _interopRequireDefault(_harvestEnergy);

var _storeEnergy = __webpack_require__(14);

var _storeEnergy2 = _interopRequireDefault(_storeEnergy);

var _withdrawEnergy = __webpack_require__(16);

var _withdrawEnergy2 = _interopRequireDefault(_withdrawEnergy);

var _moveToSpawn = __webpack_require__(4);

var _moveToSpawn2 = _interopRequireDefault(_moveToSpawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { harvestEnergy: _harvestEnergy2.default, storeEnergy: _storeEnergy2.default, withdrawEnergy: _withdrawEnergy2.default, moveToSpawn: _moveToSpawn2.default };

/***/ }),
/* 4 */
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
/* 5 */
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

    if (memory.roles === undefined) {
      memory.roles = {
        builder: 0
      };
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loop = undefined;

var _role = __webpack_require__(8);

var _role2 = _interopRequireDefault(_role);

var _memory = __webpack_require__(5);

var _memory2 = _interopRequireDefault(_memory);

var _actions = __webpack_require__(1);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loop() {
  _memory2.default.update(Memory);

  (0, _actions.updateCreepCount)(Memory, Game.spawns['Spawn1']);

  var nextCreepSchema = (0, _actions.getNextCreepSchema)(Memory, Game.spawns['Spawn1']);

  (0, _actions.createConstructionSites)(STRUCTURE_EXTENSION, Game);

  if (nextCreepSchema) {
    _memory2.default.addToQueue(nextCreepSchema, Memory);
  }

  (0, _actions.processQueue)(Memory, Game.spawns['Spawn1']);

  (0, _role2.default)(Game);
}

exports.loop = loop;

// Goals
// - Creep should move away from an energy source
// - Automatically adjust harvesters count
// - Recycle creeps
// - Update upgrader role to harvest instead of withdrawing
// - Updae builder role to harvest instead of withdrawing
// - Creep repair
// - Automatically create body size (with primary parts)
// - Automatically build roads

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _shared = __webpack_require__(9);

var _shared2 = _interopRequireDefault(_shared);

var _roles = __webpack_require__(11);

var roles = _interopRequireWildcard(_roles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(game) {
  for (var creepName in game.creeps) {
    var creep = game.creeps[creepName];
    var role = roles[creep.memory.role];

    if (role !== undefined) {
      (0, _shared2.default)(creep);
      role.run(creep);
    } else {
      console.log('Creep memory role ', creep.memory.role, ' is undefined');
    }
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (creep) {
  (0, _updateWorkStatus2.default)(creep);
};

var _updateWorkStatus = __webpack_require__(10);

var _updateWorkStatus2 = _interopRequireDefault(_updateWorkStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upgrader = exports.harvester = exports.builder = undefined;

var _builder = __webpack_require__(12);

var builder = _interopRequireWildcard(_builder);

var _harvester = __webpack_require__(17);

var harvester = _interopRequireWildcard(_harvester);

var _upgrader = __webpack_require__(18);

var upgrader = _interopRequireWildcard(_upgrader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.builder = builder;
exports.harvester = harvester;
exports.upgrader = upgrader;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(creep) {
  var status = void 0;

  if (!creep.memory.hasEnergy) {
    return _actions2.default.harvestEnergy(creep);
  }

  // Try to repair first
  var repairSites = creep.room.find(FIND_MY_STRUCTURES, {
    filter: function filter(structure) {
      return structure.hits < structure.hitsMax / 3;
    }
  });

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

/***/ }),
/* 13 */
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

  var harvestStatus = creep.harvest(source);

  if (harvestStatus === OK) {
    return;
  }

  var moveStatus = creep.moveTo(source);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = storeEnergy;

var _structure = __webpack_require__(15);

var structure = _interopRequireWildcard(_structure);

var _moveToSpawn = __webpack_require__(4);

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withdrawEnergy;

var _moveToSpawn = __webpack_require__(4);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(creep) {
  if (!creep.memory.hasEnergy) {
    return _actions2.default.harvestEnergy(creep);
  }

  return _actions2.default.storeEnergy(creep);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(creep) {
  var status = void 0;

  if (!creep.memory.hasEnergy) {
    return _actions2.default.harvestEnergy(creep);
  }

  status = creep.upgradeController(creep.room.controller);

  if (status === ERR_NOT_IN_RANGE) {
    return creep.moveTo(creep.room.controller);
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateBodyCost = calculateBodyCost;
exports.findBiggestCreatableBody = findBiggestCreatableBody;
exports.getAvailableEnergy = getAvailableEnergy;
exports.assignBody = assignBody;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calculateBodyCost(bodyPartsArray) {
  return _lodash2.default.reduce(bodyPartsArray, function (sum, bodyPart) {
    return sum + BODYPART_COST[bodyPart];
  }, 0);
}
function findBiggestCreatableBody(availableEnergyCapacity, template) {
  var body = [];
  var nextBodyPart = void 0;
  var templateCopy = template.slice();

  while (true) {
    if (templateCopy.length === 0) {
      templateCopy = template.slice();
    }

    nextBodyPart = templateCopy.shift();

    if (calculateBodyCost(body.concat(nextBodyPart)) > availableEnergyCapacity) {
      break;
    }

    body.push(nextBodyPart);
  }

  return body;
}

function getAvailableEnergy(spawn, role) {
  var availableEnergy = void 0;

  if (role === 'harvester') {
    availableEnergy = spawn.room.energyAvailable;
  } else {
    availableEnergy = spawn.room.energyCapacityAvailable;
  }

  return availableEnergy;
}

function assignBody(spawn, role) {
  var availableEnergy = getAvailableEnergy(spawn, role);

  var body = findBiggestCreatableBody(availableEnergy, [WORK, MOVE, CARRY]);

  return body;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNextCreepRole = findNextCreepRole;
exports.getNextCreepSchema = getNextCreepSchema;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(2);

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

  if (memory.queue.length !== 0 && nextCreepRole === 'harvester' && memory.queue[0].role !== 'harvester') {
    (0, _logger2.default)('Cleared ' + JSON.stringify(memory.queue[0]) + ' from queue in favor of harvester.');
    memory.queue = [];
  }

  if (memory.queue.length !== 0) {
    (0, _logger2.default)('Queue is not empty. Currently in queue: ' + JSON.stringify(memory.queue));
    return;
  }

  if (!nextCreepRole) {
    return;
  }

  return { role: nextCreepRole, body: (0, _2.assignBody)(spawn, nextCreepRole) };
}

// function maintain(creepRole: string) {
//   if (creepsByRole.length <= creepCount) {
//     _.forEach(creepsByRole, function renewCreep(creep) {
//       spawn1.renewCreep(creep);
//     });
//   }
// },

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processQueue = processQueue;

var _memory = __webpack_require__(5);

var _memory2 = _interopRequireDefault(_memory);

var _logger = __webpack_require__(2);

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

  if (creepSchema.role === undefined) {
    (0, _logger2.default)('Creep role is undefined in ' + JSON.stringify(creepSchema) + '.');
    _memory2.default.clearQueue();
    return;
  }

  (0, _logger2.default)('Spawning new ' + creepSchema.role + '.');
  var timeString = new Date().toTimeString().slice(0, 8);

  var creepName = spawn.createCreep(creepSchema.body, creepSchema.role + ' ' + timeString, {
    role: creepSchema.role
  });

  (0, _logger2.default)('Clearing queue');
  _memory2.default.clearQueue();
}

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canBuildOn = canBuildOn;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _createArea = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canBuildOn(room, pos) {
  /*
    . x .
    . o .
    x x x
    ^ - should be false
  */
  var maxObstacles = 2;

  var structuresInPosition = room.lookForAt(LOOK_STRUCTURES, pos.x, pos.y);
  var constructionSiteInPosition = room.lookForAt(LOOK_CONSTRUCTION_SITES, pos.x, pos.y);

  if (structuresInPosition.length !== 0 || constructionSiteInPosition.length !== 0) {
    return false;
  }

  var areaDimensions = (0, _createArea.createArea)(pos, 1);

  var objectsAtArea = room.lookAtArea(areaDimensions.top, areaDimensions.left, areaDimensions.bottom, areaDimensions.right, true);

  var hardObstaclesAtArea = _lodash2.default.filter(objectsAtArea, function (object) {
    return object.type === LOOK_SOURCES || object.type === LOOK_MINERALS;
  });

  if (hardObstaclesAtArea.length > 0) {
    return false;
  }

  var softObstaclesAtArea = _lodash2.default.filter(objectsAtArea, function (object) {
    return object.type === LOOK_CONSTRUCTION_SITES || object.type === LOOK_STRUCTURES || object.type === LOOK_TERRAIN && object[LOOK_TERRAIN] === 'wall';
  });

  if (softObstaclesAtArea.length > maxObstacles) {
    return false;
  }

  return true;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConstructionSites = createConstructionSites;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

var _createArea = __webpack_require__(6);

var _2 = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createConstructionSites(type, game) {
  var rooms = _lodash2.default.values(game.rooms);
  var room = rooms[0];

  var availableAmountForStructureType = (0, _2.canBuild)(room, type);

  if (!availableAmountForStructureType) {
    return false;
  }
  (0, _logger2.default)('Available amount for ' + type + ' is ' + availableAmountForStructureType);

  var spawns = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_SPAWN }
  });

  var spawn = spawns[0];
  var area = (0, _createArea.createArea)(spawn.pos, 10);
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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCreepCount = updateCreepCount;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateCreepCount(memory, spawn) {
  var constructionSites = spawn.room.find(FIND_CONSTRUCTION_SITES);

  if (memory.roles.builder < 1 && constructionSites.length > 0) {
    memory.roles.builder = 1;
    (0, _logger2.default)('0 builders. Found construction sites. Creating a builder.');
  }

  if (memory.roles.builder > 0 && constructionSites.length === 0) {
    memory.roles.builder = 0;
    (0, _logger2.default)('Found builders. 0 construction sites. Removing builders.');
  }
}

/***/ })
/******/ ]);