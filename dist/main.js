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

var _assignBody = __webpack_require__(4);

Object.defineProperty(exports, 'assignBody', {
  enumerable: true,
  get: function get() {
    return _assignBody.assignBody;
  }
});

var _getNextCreepSchema = __webpack_require__(27);

Object.defineProperty(exports, 'getNextCreepSchema', {
  enumerable: true,
  get: function get() {
    return _getNextCreepSchema.getNextCreepSchema;
  }
});

var _processQueue = __webpack_require__(28);

Object.defineProperty(exports, 'processQueue', {
  enumerable: true,
  get: function get() {
    return _processQueue.processQueue;
  }
});

var _canBuild = __webpack_require__(29);

Object.defineProperty(exports, 'canBuild', {
  enumerable: true,
  get: function get() {
    return _canBuild.canBuild;
  }
});

var _canBuildOn = __webpack_require__(30);

Object.defineProperty(exports, 'canBuildOn', {
  enumerable: true,
  get: function get() {
    return _canBuildOn.canBuildOn;
  }
});

var _createConstructionSites = __webpack_require__(31);

Object.defineProperty(exports, 'createConstructionSites', {
  enumerable: true,
  get: function get() {
    return _createConstructionSites.createConstructionSites;
  }
});

var _manageCreepCount = __webpack_require__(32);

Object.defineProperty(exports, 'manageCreepCount', {
  enumerable: true,
  get: function get() {
    return _manageCreepCount.manageCreepCount;
  }
});

var _attackInvaders = __webpack_require__(33);

Object.defineProperty(exports, 'attackInvaders', {
  enumerable: true,
  get: function get() {
    return _attackInvaders.attackInvaders;
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = runner;

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _checks = __webpack_require__(22);

var _checks2 = _interopRequireDefault(_checks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function runner(creep, actionItems) {
  var working = void 0;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = actionItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var action = _step.value;

      if (typeof action === 'string') {
        working = _actions2.default[action].call(null, creep);
      } else if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
        var _actions$action$name;

        var _additionalArguments = action.additionalArguments || {};

        working = (_actions$action$name = _actions2.default[action.name]).call.apply(_actions$action$name, [null, creep].concat(_toConsumableArray(_additionalArguments)));

        if (working && action.additionalCheck && typeof _checks2.default[action.additionalCheck] === 'function') {
          working = _checks2.default[action.additionalCheck].call(null, creep);
        }
      }

      if (working) {
        return;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 4 */
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
function findBiggestCreatableBody(availableEnergyCapacity) {
  var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [WORK, MOVE, CARRY];

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

function getAvailableEnergy(spawn, urgent) {
  var smallestBodyCost = 200;
  var availableEnergy = void 0;

  if (urgent) {
    availableEnergy = spawn.room.energyAvailable > smallestBodyCost ? spawn.room.energyAvailable : smallestBodyCost;
  } else {
    availableEnergy = spawn.room.energyCapacityAvailable;
  }

  return availableEnergy;
}

function assignBody(spawn) {
  var urgent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var availableEnergy = getAvailableEnergy(spawn, urgent);

  var body = findBiggestCreatableBody(availableEnergy);

  return body;
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
  update: function update(memory, room) {
    if (!memory.queue) {
      memory.queue = [];
    }

    if (!memory.roles) {
      var energySources = room.find(FIND_SOURCES).length;

      memory.roles = {
        harvester: energySources > 1 ? energySources : 2,
        upgrader: 1,
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
exports.default = createArea;
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

var _init = __webpack_require__(8);

var _init2 = _interopRequireDefault(_init);

var _memory = __webpack_require__(5);

var _memory2 = _interopRequireDefault(_memory);

var _actions = __webpack_require__(1);

var _rooms = __webpack_require__(34);

var _rooms2 = _interopRequireDefault(_rooms);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loop() {
  _memory2.default.update(Memory, Game.rooms['W7S56']);

  (0, _actions.manageCreepCount)(Memory, Game.spawns['Spawn1']);

  var nextCreepSchema = (0, _actions.getNextCreepSchema)(Memory, Game.spawns['Spawn1']);

  if (nextCreepSchema) {
    _memory2.default.addToQueue(nextCreepSchema, Memory);
  }

  (0, _actions.processQueue)(Memory, Game.spawns['Spawn1']);

  (0, _actions.createConstructionSites)(STRUCTURE_EXTENSION, Game);
  (0, _actions.createConstructionSites)(STRUCTURE_STORAGE, Game);
  (0, _actions.createConstructionSites)(STRUCTURE_TOWER, Game);

  (0, _rooms2.default)(Game);

  (0, _init2.default)(Game);
}
exports.loop = loop;

/*
Goals:
Claim another room
  Add logic to increase scout number
    Find room exists
    For each exit
      If other room is not in Game.rooms return false
      If room controller is undefined return false
      If room controller my is true return false
      If room
  Add scout to room roles
  Send scout to another room
  Place a flag in another room
  Send claimers to other rooms
Refactor queue to be part of room memory
Create pure harvester role (harvest / build container)
Create courrier role
? Renew creeps
? Automatically build roads
Recycle creeps
? Creep should move away from an energy source
*/

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

var _ = __webpack_require__(12);

var roles = _interopRequireWildcard(_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(game) {
  for (var creepName in game.creeps) {
    var creep = game.creeps[creepName];
    var role = roles[creep.memory.role];

    if (role === undefined) {
      console.log('Creep memory role ', creep.memory.role, ' is undefined. Creep object: ' + JSON.stringify(creep));
      return;
    }

    (0, _shared2.default)(creep);

    // TODO: Enable creep renewal, but add additional checks. Otherwise the colony dies
    // if (creep.memory.needsRenewal === 'yes') {
    //   actions.moveToSpawn(creep);
    //   game.spawns['Spawn1'].renewCreep(creep);
    //   continue;
    // }

    role.run(creep);
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sharedActions;

var _updateWorkStatus = __webpack_require__(10);

var _updateWorkStatus2 = _interopRequireDefault(_updateWorkStatus);

var _updateRenewalStatus = __webpack_require__(11);

var _updateRenewalStatus2 = _interopRequireDefault(_updateRenewalStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sharedActions(creep) {
  var hasEnergy = (0, _updateWorkStatus2.default)(creep);
  (0, _updateRenewalStatus2.default)(creep);
}

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
exports.default = updateRenewalStatus;

var _assignBody = __webpack_require__(4);

function updateRenewalStatus(creep) {
  var bodySizeOffset = 2;
  var minThreshold = 100;
  var maxThreshold = 1450;
  var renewalStatus = creep.memory.needsRenewal;

  if (renewalStatus === 'never') {
    return;
  }

  if (renewalStatus === undefined) {
    creep.memory.needsRenewal = 'no';
    return;
  }

  if (renewalStatus === 'yes' && creep.ticksToLive > maxThreshold) {
    creep.memory.needsRenewal = 'no';
    return;
  }

  // renewalStatus === 'no'
  if (creep.ticksToLive > minThreshold) {
    return;
  }

  var biggestCreatableBody = (0, _assignBody.findBiggestCreatableBody)(creep.room.energyCapacityAvailable);

  if (creep.body.length + bodySizeOffset < biggestCreatableBody.length) {
    creep.memory.needsRenewal = 'never';
    return;
  }

  creep.memory.needsRenewal = 'yes';
  return;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upgrader = exports.harvester = exports.builder = undefined;

var _builder = __webpack_require__(13);

var builder = _interopRequireWildcard(_builder);

var _harvester = __webpack_require__(25);

var harvester = _interopRequireWildcard(_harvester);

var _upgrader = __webpack_require__(26);

var upgrader = _interopRequireWildcard(_upgrader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.builder = builder;
exports.harvester = harvester;
exports.upgrader = upgrader;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _runner = __webpack_require__(3);

var _runner2 = _interopRequireDefault(_runner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(creep) {
  var actionItems = [{ name: 'withdrawEnergy', additionalCheck: 'foundConstructionSites' }, 'harvestEnergy', 'build', { name: 'transferToStructure', additionalArguments: [STRUCTURE_TOWER] }, 'fillStorage'];

  (0, _runner2.default)(creep, actionItems);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _build = __webpack_require__(15);

var _build2 = _interopRequireDefault(_build);

var _fillStorage = __webpack_require__(16);

var _fillStorage2 = _interopRequireDefault(_fillStorage);

var _pickupEnergy = __webpack_require__(17);

var _pickupEnergy2 = _interopRequireDefault(_pickupEnergy);

var _harvestEnergy = __webpack_require__(18);

var _harvestEnergy2 = _interopRequireDefault(_harvestEnergy);

var _withdrawEnergy = __webpack_require__(19);

var _withdrawEnergy2 = _interopRequireDefault(_withdrawEnergy);

var _transferToStructure = __webpack_require__(20);

var _transferToStructure2 = _interopRequireDefault(_transferToStructure);

var _upgradeController = __webpack_require__(21);

var _upgradeController2 = _interopRequireDefault(_upgradeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  build: _build2.default,
  fillStorage: _fillStorage2.default,
  pickupEnergy: _pickupEnergy2.default,
  harvestEnergy: _harvestEnergy2.default,
  withdrawEnergy: _withdrawEnergy2.default,
  transferToStructure: _transferToStructure2.default,
  upgradeController: _upgradeController2.default
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;
function build(creep) {
  // Look for construction sites
  var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

  if (!constructionSite) {
    return false;
  }

  var status = creep.build(constructionSite);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(constructionSite);
  }

  return true;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fillStorage;
function fillStorage(creep) {
  if (creep.room.storage === undefined) {
    return false;
  }

  var status = creep.transfer(creep.room.storage, RESOURCE_ENERGY);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.storage);
  }

  return true;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pickupEnergy;
function pickupEnergy(creep) {
  if (creep.memory.hasEnergy) {
    return false;
  }

  var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
    filter: function filter(resource) {
      return !!resource && resource.resourceType === RESOURCE_ENERGY;
    }
  });

  if (droppedEnergy === null) {
    return false;
  }

  var status = creep.pickup(droppedEnergy);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(droppedEnergy);
  }

  return true;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = harvestEnergy;
function harvestEnergy(creep) {
  if (creep.memory.hasEnergy) {
    return false;
  }

  var source = creep.pos.findClosestByPath(FIND_SOURCES, {
    filter: function filter(source) {
      return source !== undefined && source.energy > 0;
    }
  });

  if (source === null) {
    return false;
  }

  var status = creep.harvest(source);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(source);
  }

  return true;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withdrawEnergy;
function withdrawEnergy(creep) {
  if (creep.memory.hasEnergy) {
    return false;
  }

  if (creep.room.storage === undefined) {
    return false;
  }

  if (creep.room.storage.store[RESOURCE_ENERGY] < creep.carryCapacity) {
    return false;
  }

  var status = creep.withdraw(creep.room.storage, RESOURCE_ENERGY);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.storage);
  }

  return true;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transferToStructure;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transferToStructure(creep, structureType) {
  var target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
    filter: function filter(structure) {
      return structure.structureType === structureType && structure.energy < structure.energyCapacity;
    }
  });

  if (target === null) {
    return false;
  }

  var status = creep.transfer(target, RESOURCE_ENERGY);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(target);
  }

  return true;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upgradeController;
function upgradeController(creep) {
  var status = creep.upgradeController(creep.room.controller);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.controller);
  }

  return true;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foundConstructionSites = __webpack_require__(23);

var _foundConstructionSites2 = _interopRequireDefault(_foundConstructionSites);

var _storageAboveQuarter = __webpack_require__(24);

var _storageAboveQuarter2 = _interopRequireDefault(_storageAboveQuarter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { foundConstructionSites: _foundConstructionSites2.default, storageAboveQuarter: _storageAboveQuarter2.default };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = foundConstructionSites;
function foundConstructionSites(creep) {
  var constructionSites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);

  return constructionSites.length === 0;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = storageAboveQuarter;
function storageAboveQuarter(creep) {
  return creep.room.storage.store[RESOURCE_ENERGY] > 250000;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _runner = __webpack_require__(3);

var _runner2 = _interopRequireDefault(_runner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(creep) {
  var actionItems = ['pickupEnergy', 'harvestEnergy', { name: 'transferToStructure', additionalArguments: [STRUCTURE_SPAWN] }, { name: 'transferToStructure', additionalArguments: [STRUCTURE_EXTENSION] }, 'build', { name: 'transferToStructure', additionalArguments: [STRUCTURE_TOWER] }, 'fillStorage'];

  (0, _runner2.default)(creep, actionItems);
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _runner = __webpack_require__(3);

var _runner2 = _interopRequireDefault(_runner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function run(creep) {
  var actionItems = [{ name: 'withdrawEnergy', additionalCheck: 'storageAboveQuarter' }, 'harvestEnergy', 'upgradeController'];

  (0, _runner2.default)(creep, actionItems);
}

/***/ }),
/* 27 */
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
  var existingCreepsByRole = _lodash2.default.countBy(memory.creeps, function (creep) {
    return creep.role;
  });

  var nextCreepRole = _lodash2.default.find(roles, function (role) {
    var requiredRoleCount = memory.roles[role];
    var existingRoleCount = existingCreepsByRole[role];

    return requiredRoleCount > 0 && !existingRoleCount || requiredRoleCount > existingRoleCount;
  });

  var urgent = nextCreepRole === 'harvester' && !existingCreepsByRole.harvester;

  return { nextCreepRole: nextCreepRole, urgent: urgent };
}
function getNextCreepSchema(memory, spawn) {
  if (spawn.spawning !== null) {
    return;
  }

  // $FlowFixMe
  var roles = _lodash2.default.keys(memory.roles);

  var _findNextCreepRole = findNextCreepRole(roles, memory),
      nextCreepRole = _findNextCreepRole.nextCreepRole,
      urgent = _findNextCreepRole.urgent;

  // Priority for harvesters


  if (memory.queue.length !== 0 && urgent && nextCreepRole) {
    (0, _logger2.default)('Cleared ' + JSON.stringify(memory.queue[0]) + ' from queue in favor of ' + nextCreepRole + '.');
    memory.queue = [];
  }

  if (memory.queue.length !== 0) {
    return;
  }

  if (!nextCreepRole) {
    return;
  }

  return { role: nextCreepRole, body: (0, _2.assignBody)(spawn, urgent) };
}

// function maintain(creepRole: string) {
//   if (creepsByRole.length <= creepCount) {
//     _.forEach(creepsByRole, function renewCreep(creep) {
//       spawn1.renewCreep(creep);
//     });
//   }
// },

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canBuildOn = canBuildOn;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _createArea = __webpack_require__(6);

var _createArea2 = _interopRequireDefault(_createArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canBuildOn(room, pos) {
  /*
    . x .
    . o .
    x x x
    ^ - should be false
  */
  var maxObstacles = 1;

  var structuresInPosition = room.lookForAt(LOOK_STRUCTURES, pos.x, pos.y);
  var constructionSiteInPosition = room.lookForAt(LOOK_CONSTRUCTION_SITES, pos.x, pos.y);

  if (structuresInPosition.length !== 0 || constructionSiteInPosition.length !== 0) {
    return false;
  }

  var areaDimensions = (0, _createArea2.default)(pos, 1);

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
/* 31 */
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

var _createArea2 = _interopRequireDefault(_createArea);

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
  var area = (0, _createArea2.default)(spawn.pos, 10);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manageCreepCount = manageCreepCount;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function manageCreepCount(memory, spawn) {
  var constructionSites = spawn.room.find(FIND_CONSTRUCTION_SITES);

  if (memory.roles.builder < 1 && constructionSites.length > 0) {
    memory.roles.builder = 1;
    (0, _logger2.default)('0 builders. Found construction sites. Creating a builder.');
  }

  if (memory.roles.builder > 0 && constructionSites.length === 0) {
    memory.roles.builder = 0;
    (0, _logger2.default)('Found builders. 0 construction sites. Removing builders.');
  }

  if (spawn.room.storage.store[RESOURCE_ENERGY] > 500000 && memory.roles.upgrader < 2) {
    memory.roles.upgrader = 2;
    (0, _logger2.default)('More than 500k energy stored. Less than 2 upgraders. Creating an upgrader.');
  }

  if (spawn.room.storage.store[RESOURCE_ENERGY] < 300000 && memory.roles.upgrader > 1) {
    memory.roles.upgrader = 1;
    (0, _logger2.default)('Found more than 1 upgrader. Less than 300k energy in store. Setting upgraders to 1.');
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attackInvaders = attackInvaders;
function attackInvaders(room) {
  var invaders = room.find(FIND_HOSTILE_CREEPS);

  if (invaders.length === 0) {
    return false;
  }

  var towers = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_TOWER }
  });

  if (towers.length === 0) {
    return false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = towers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tower = _step.value;

      tower.attack(invaders[0]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = roomActions;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function roomActions(game) {
  _lodash2.default.forEach(game.rooms, function (room) {
    (0, _actions.attackInvaders)(room);
  });
}

/***/ })
/******/ ]);