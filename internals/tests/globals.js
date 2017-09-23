global.OK = 0;
global.ERR_NOT_OWNER = -1;
global.ERR_NO_PATH = -2;
global.ERR_NAME_EXISTS = -3;
global.ERR_BUSY = -4;
global.ERR_NOT_FOUND = -5;
global.ERR_NOT_ENOUGH_ENERGY = -6;
global.ERR_NOT_ENOUGH_RESOURCES = -6;
global.ERR_INVALID_TARGET = -7;
global.ERR_FULL = -8;
global.ERR_NOT_IN_RANGE = -9;
global.ERR_INVALID_ARGS = -10;
global.ERR_TIRED = -11;
global.ERR_NO_BODYPART = -12;
global.ERR_NOT_ENOUGH_EXTENSIONS = -6;
global.ERR_RCL_NOT_ENOUGH = -14;
global.ERR_GCL_NOT_ENOUGH = -15;

global.FIND_EXIT_TOP = 1;
global.FIND_EXIT_RIGHT = 3;
global.FIND_EXIT_BOTTOM = 5;
global.FIND_EXIT_LEFT = 7;
global.FIND_EXIT = 10;
global.FIND_CREEPS = 101;
global.FIND_MY_CREEPS = 102;
global.FIND_HOSTILE_CREEPS = 103;
global.FIND_SOURCES_ACTIVE = 104;
global.FIND_SOURCES = 105;
global.FIND_DROPPED_ENERGY = -106;
global.FIND_DROPPED_RESOURCES = 106;
global.FIND_STRUCTURES = 107;
global.FIND_MY_STRUCTURES = 108;
global.FIND_HOSTILE_STRUCTURES = 109;
global.FIND_FLAGS = 110;
global.FIND_CONSTRUCTION_SITES = 111;
global.FIND_MY_SPAWNS = 112;
global.FIND_HOSTILE_SPAWNS = 113;
global.FIND_MY_CONSTRUCTION_SITES = 114;
global.FIND_HOSTILE_CONSTRUCTION_SITES = 115;
global.FIND_MINERALS = 116;
global.FIND_NUKES = 117;

global.TOP = 1;
global.TOP_RIGHT = 2;
global.RIGHT = 3;
global.BOTTOM_RIGHT = 4;
global.BOTTOM = 5;
global.BOTTOM_LEFT = 6;
global.LEFT = 7;
global.TOP_LEFT = 8;

global.COLOR_RED = 1;
global.COLOR_PURPLE = 2;
global.COLOR_BLUE = 3;
global.COLOR_CYAN = 4;
global.COLOR_GREEN = 5;
global.COLOR_YELLOW = 6;
global.COLOR_ORANGE = 7;
global.COLOR_BROWN = 8;
global.COLOR_GREY = 9;
global.COLOR_WHITE = 10;

global.LOOK_CREEPS = 'creep';
global.LOOK_ENERGY = 'energy';
global.LOOK_RESOURCES = 'resource';
global.LOOK_SOURCES = 'source';
global.LOOK_MINERALS = 'mineral';
global.LOOK_STRUCTURES = 'structure';
global.LOOK_FLAGS = 'flag';
global.LOOK_CONSTRUCTION_SITES = 'constructionSite';
global.LOOK_NUKES = 'nuke';
global.LOOK_TERRAIN = 'terrain';

global.OBSTACLE_OBJECT_TYPES = [
  'spawn',
  'creep',
  'wall',
  'source',
  'constructedWall',
  'extension',
  'link',
  'storage',
  'tower',
  'observer',
  'powerSpawn',
  'powerBank',
  'lab',
  'terminal',
  'nuker',
];

global.MOVE = 'move';
global.WORK = 'work';
global.CARRY = 'carry';
global.ATTACK = 'attack';
global.RANGED_ATTACK = 'ranged_attack';
global.TOUGH = 'tough';
global.HEAL = 'heal';
global.CLAIM = 'claim';

global.BODYPART_COST = {
  move: 50,
  work: 100,
  attack: 80,
  carry: 50,
  heal: 250,
  ranged_attack: 150,
  tough: 10,
  claim: 600,
};

// WORLD_WIDTH and WORLD_HEIGHT constants are deprecated, please use Game.map.getWorldSize() instead
// WORLD_WIDTH: 202,
// WORLD_HEIGHT: 202,

global.CREEP_LIFE_TIME = 1500;
global.CREEP_CLAIM_LIFE_TIME = 500;
global.CREEP_CORPSE_RATE = 0.2;

global.CARRY_CAPACITY = 50;
global.HARVEST_POWER = 2;
global.HARVEST_MINERAL_POWER = 1;
global.REPAIR_POWER = 100;
global.DISMANTLE_POWER = 50;
global.BUILD_POWER = 5;
global.ATTACK_POWER = 30;
global.UPGRADE_CONTROLLER_POWER = 1;
global.RANGED_ATTACK_POWER = 10;
global.HEAL_POWER = 12;
global.RANGED_HEAL_POWER = 4;
global.REPAIR_COST = 0.01;
global.DISMANTLE_COST = 0.005;

global.RAMPART_DECAY_AMOUNT = 300;
global.RAMPART_DECAY_TIME = 100;
global.RAMPART_HITS = 1;
global.RAMPART_HITS_MAX = {
  2: 300000,
  3: 1000000,
  4: 3000000,
  5: 10000000,
  6: 30000000,
  7: 100000000,
  8: 300000000,
};

global.ENERGY_REGEN_TIME = 300;
global.ENERGY_DECAY = 1000;

global.SPAWN_HITS = 5000;
global.SPAWN_ENERGY_START = 300;
global.SPAWN_ENERGY_CAPACITY = 300;
global.CREEP_SPAWN_TIME = 3;
global.SPAWN_RENEW_RATIO = 1.2;

global.SOURCE_ENERGY_CAPACITY = 3000;
global.SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500;
global.SOURCE_ENERGY_KEEPER_CAPACITY = 4000;

global.WALL_HITS = 1;
global.WALL_HITS_MAX = 300000000;

global.EXTENSION_HITS = 1000;
global.EXTENSION_ENERGY_CAPACITY = {
  0: 50,
  1: 50,
  2: 50,
  3: 50,
  4: 50,
  5: 50,
  6: 50,
  7: 100,
  8: 200,
};

global.ROAD_HITS = 5000;
global.ROAD_WEAROUT = 1;
global.ROAD_DECAY_AMOUNT = 100;
global.ROAD_DECAY_TIME = 1000;

global.LINK_HITS = 1000;
global.LINK_HITS_MAX = 1000;
global.LINK_CAPACITY = 800;
global.LINK_COOLDOWN = 1;
global.LINK_LOSS_RATIO = 0.03;

global.STORAGE_CAPACITY = 1000000;
global.STORAGE_HITS = 10000;

global.STRUCTURE_SPAWN = 'spawn';
global.STRUCTURE_EXTENSION = 'extension';
global.STRUCTURE_ROAD = 'road';
global.STRUCTURE_WALL = 'constructedWall';
global.STRUCTURE_RAMPART = 'rampart';
global.STRUCTURE_KEEPER_LAIR = 'keeperLair';
global.STRUCTURE_PORTAL = 'portal';
global.STRUCTURE_CONTROLLER = 'controller';
global.STRUCTURE_LINK = 'link';
global.STRUCTURE_STORAGE = 'storage';
global.STRUCTURE_TOWER = 'tower';
global.STRUCTURE_OBSERVER = 'observer';
global.STRUCTURE_POWER_BANK = 'powerBank';
global.STRUCTURE_POWER_SPAWN = 'powerSpawn';
global.STRUCTURE_EXTRACTOR = 'extractor';
global.STRUCTURE_LAB = 'lab';
global.STRUCTURE_TERMINAL = 'terminal';
global.STRUCTURE_CONTAINER = 'container';
global.STRUCTURE_NUKER = 'nuker';

global.CONSTRUCTION_COST = {
  spawn: 15000,
  extension: 3000,
  road: 300,
  constructedWall: 1,
  rampart: 1,
  link: 5000,
  storage: 30000,
  tower: 5000,
  observer: 8000,
  powerSpawn: 100000,
  extractor: 5000,
  lab: 50000,
  terminal: 100000,
  container: 5000,
  nuker: 100000,
};
global.CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5;

global.CONTROLLER_LEVELS = {
  1: 200,
  2: 45000,
  3: 135000,
  4: 405000,
  5: 1215000,
  6: 3645000,
  7: 10935000,
};
global.CONTROLLER_STRUCTURES = {
  spawn: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 2, 8: 3 },
  extension: { 0: 0, 1: 0, 2: 5, 3: 10, 4: 20, 5: 30, 6: 40, 7: 50, 8: 60 },
  link: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 2, 6: 3, 7: 4, 8: 6 },
  road: {
    0: 2500,
    1: 2500,
    2: 2500,
    3: 2500,
    4: 2500,
    5: 2500,
    6: 2500,
    7: 2500,
    8: 2500,
  },
  constructedWall: {
    1: 0,
    2: 2500,
    3: 2500,
    4: 2500,
    5: 2500,
    6: 2500,
    7: 2500,
    8: 2500,
  },
  rampart: {
    1: 0,
    2: 2500,
    3: 2500,
    4: 2500,
    5: 2500,
    6: 2500,
    7: 2500,
    8: 2500,
  },
  storage: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1 },
  tower: { 1: 0, 2: 0, 3: 1, 4: 1, 5: 2, 6: 2, 7: 3, 8: 6 },
  observer: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
  powerSpawn: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
  extractor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1 },
  terminal: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1 },
  lab: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 3, 7: 6, 8: 10 },
  container: { 0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5 },
  nuker: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
};
global.CONTROLLER_DOWNGRADE = {
  1: 20000,
  2: 5000,
  3: 10000,
  4: 20000,
  5: 40000,
  6: 60000,
  7: 100000,
  8: 150000,
};
global.CONTROLLER_CLAIM_DOWNGRADE = 0.2;
global.CONTROLLER_RESERVE = 1;
global.CONTROLLER_RESERVE_MAX = 5000;
global.CONTROLLER_MAX_UPGRADE_PER_TICK = 15;
global.CONTROLLER_ATTACK_BLOCKED_UPGRADE = 1000;
global.CONTROLLER_NUKE_BLOCKED_UPGRADE = 200;

global.SAFE_MODE_DURATION = 20000;
global.SAFE_MODE_COOLDOWN = 50000;
global.SAFE_MODE_COST = 1000;

global.TOWER_HITS = 3000;
global.TOWER_CAPACITY = 1000;
global.TOWER_ENERGY_COST = 10;
global.TOWER_POWER_ATTACK = 600;
global.TOWER_POWER_HEAL = 400;
global.TOWER_POWER_REPAIR = 800;
global.TOWER_OPTIMAL_RANGE = 5;
global.TOWER_FALLOFF_RANGE = 20;
global.TOWER_FALLOFF = 0.75;

global.OBSERVER_HITS = 500;
global.OBSERVER_RANGE = 10;

global.POWER_BANK_HITS = 2000000;
global.POWER_BANK_CAPACITY_MAX = 5000;
global.POWER_BANK_CAPACITY_MIN = 500;
global.POWER_BANK_CAPACITY_CRIT = 0.3;
global.POWER_BANK_DECAY = 5000;
global.POWER_BANK_HIT_BACK = 0.5;

global.POWER_SPAWN_HITS = 5000;
global.POWER_SPAWN_ENERGY_CAPACITY = 5000;
global.POWER_SPAWN_POWER_CAPACITY = 100;
global.POWER_SPAWN_ENERGY_RATIO = 50;

global.EXTRACTOR_HITS = 500;
global.EXTRACTOR_COOLDOWN = 5;

global.LAB_HITS = 500;
global.LAB_MINERAL_CAPACITY = 3000;
global.LAB_ENERGY_CAPACITY = 2000;
global.LAB_BOOST_ENERGY = 20;
global.LAB_BOOST_MINERAL = 30;
global.LAB_COOLDOWN = 10;
global.LAB_REACTION_AMOUNT = 5;

global.GCL_POW = 2.4;
global.GCL_MULTIPLY = 1000000;
global.GCL_NOVICE = 3;

global.TERRAIN_MASK_WALL = 1;
global.TERRAIN_MASK_SWAMP = 2;
global.TERRAIN_MASK_LAVA = 4;

global.MAX_CONSTRUCTION_SITES = 100;
global.MAX_CREEP_SIZE = 50;

global.MINERAL_REGEN_TIME = 50000;
global.MINERAL_MIN_AMOUNT = {
  H: 35000,
  O: 35000,
  L: 35000,
  K: 35000,
  Z: 35000,
  U: 35000,
  X: 35000,
};
global.MINERAL_RANDOM_FACTOR = 2;

global.MINERAL_DENSITY = {
  1: 15000,
  2: 35000,
  3: 70000,
  4: 100000,
};
global.MINERAL_DENSITY_PROBABILITY = {
  1: 0.1,
  2: 0.5,
  3: 0.9,
  4: 1.0,
};
global.MINERAL_DENSITY_CHANGE = 0.05;

global.DENSITY_LOW = 1;
global.DENSITY_MODERATE = 2;
global.DENSITY_HIGH = 3;
global.DENSITY_ULTRA = 4;

global.TERMINAL_CAPACITY = 300000;
global.TERMINAL_HITS = 3000;
global.TERMINAL_SEND_COST = 0.1;
global.TERMINAL_MIN_SEND = 100;
global.TERMINAL_COOLDOWN = 10;

global.CONTAINER_HITS = 250000;
global.CONTAINER_CAPACITY = 2000;
global.CONTAINER_DECAY = 5000;
global.CONTAINER_DECAY_TIME = 100;
global.CONTAINER_DECAY_TIME_OWNED = 500;

global.NUKER_HITS = 1000;
global.NUKER_COOLDOWN = 100000;
global.NUKER_ENERGY_CAPACITY = 300000;
global.NUKER_GHODIUM_CAPACITY = 5000;
global.NUKE_LAND_TIME = 50000;
global.NUKE_RANGE = 10;
global.NUKE_DAMAGE = {
  0: 10000000,
  2: 5000000,
};

global.PORTAL_DECAY = 30000;

global.ORDER_SELL = 'sell';
global.ORDER_BUY = 'buy';

global.MARKET_FEE = 0.05;

global.FLAGS_LIMIT = 10000;

global.SUBSCRIPTION_TOKEN = 'token';

global.RESOURCE_ENERGY = 'energy';
global.RESOURCE_POWER = 'power';

global.RESOURCE_HYDROGEN = 'H';
global.RESOURCE_OXYGEN = 'O';
global.RESOURCE_UTRIUM = 'U';
global.RESOURCE_LEMERGIUM = 'L';
global.RESOURCE_KEANIUM = 'K';
global.RESOURCE_ZYNTHIUM = 'Z';
global.RESOURCE_CATALYST = 'X';
global.RESOURCE_GHODIUM = 'G';

global.RESOURCE_HYDROXIDE = 'OH';
global.RESOURCE_ZYNTHIUM_KEANITE = 'ZK';
global.RESOURCE_UTRIUM_LEMERGITE = 'UL';

global.RESOURCE_UTRIUM_HYDRIDE = 'UH';
global.RESOURCE_UTRIUM_OXIDE = 'UO';
global.RESOURCE_KEANIUM_HYDRIDE = 'KH';
global.RESOURCE_KEANIUM_OXIDE = 'KO';
global.RESOURCE_LEMERGIUM_HYDRIDE = 'LH';
global.RESOURCE_LEMERGIUM_OXIDE = 'LO';
global.RESOURCE_ZYNTHIUM_HYDRIDE = 'ZH';
global.RESOURCE_ZYNTHIUM_OXIDE = 'ZO';
global.RESOURCE_GHODIUM_HYDRIDE = 'GH';
global.RESOURCE_GHODIUM_OXIDE = 'GO';

global.RESOURCE_UTRIUM_ACID = 'UH2O';
global.RESOURCE_UTRIUM_ALKALIDE = 'UHO2';
global.RESOURCE_KEANIUM_ACID = 'KH2O';
global.RESOURCE_KEANIUM_ALKALIDE = 'KHO2';
global.RESOURCE_LEMERGIUM_ACID = 'LH2O';
global.RESOURCE_LEMERGIUM_ALKALIDE = 'LHO2';
global.RESOURCE_ZYNTHIUM_ACID = 'ZH2O';
global.RESOURCE_ZYNTHIUM_ALKALIDE = 'ZHO2';
global.RESOURCE_GHODIUM_ACID = 'GH2O';
global.RESOURCE_GHODIUM_ALKALIDE = 'GHO2';

global.RESOURCE_CATALYZED_UTRIUM_ACID = 'XUH2O';
global.RESOURCE_CATALYZED_UTRIUM_ALKALIDE = 'XUHO2';
global.RESOURCE_CATALYZED_KEANIUM_ACID = 'XKH2O';
global.RESOURCE_CATALYZED_KEANIUM_ALKALIDE = 'XKHO2';
global.RESOURCE_CATALYZED_LEMERGIUM_ACID = 'XLH2O';
global.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = 'XLHO2';
global.RESOURCE_CATALYZED_ZYNTHIUM_ACID = 'XZH2O';
global.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = 'XZHO2';
global.RESOURCE_CATALYZED_GHODIUM_ACID = 'XGH2O';
global.RESOURCE_CATALYZED_GHODIUM_ALKALIDE = 'XGHO2';

global.REACTIONS = {
  H: {
    O: 'OH',
    L: 'LH',
    K: 'KH',
    U: 'UH',
    Z: 'ZH',
    G: 'GH',
  },
  O: {
    H: 'OH',
    L: 'LO',
    K: 'KO',
    U: 'UO',
    Z: 'ZO',
    G: 'GO',
  },
  Z: {
    K: 'ZK',
    H: 'ZH',
    O: 'ZO',
  },
  L: {
    U: 'UL',
    H: 'LH',
    O: 'LO',
  },
  K: {
    Z: 'ZK',
    H: 'KH',
    O: 'KO',
  },
  G: {
    H: 'GH',
    O: 'GO',
  },
  U: {
    L: 'UL',
    H: 'UH',
    O: 'UO',
  },
  OH: {
    UH: 'UH2O',
    UO: 'UHO2',
    ZH: 'ZH2O',
    ZO: 'ZHO2',
    KH: 'KH2O',
    KO: 'KHO2',
    LH: 'LH2O',
    LO: 'LHO2',
    GH: 'GH2O',
    GO: 'GHO2',
  },
  X: {
    UH2O: 'XUH2O',
    UHO2: 'XUHO2',
    LH2O: 'XLH2O',
    LHO2: 'XLHO2',
    KH2O: 'XKH2O',
    KHO2: 'XKHO2',
    ZH2O: 'XZH2O',
    ZHO2: 'XZHO2',
    GH2O: 'XGH2O',
    GHO2: 'XGHO2',
  },
  ZK: {
    UL: 'G',
  },
  UL: {
    ZK: 'G',
  },
  LH: {
    OH: 'LH2O',
  },
  ZH: {
    OH: 'ZH2O',
  },
  GH: {
    OH: 'GH2O',
  },
  KH: {
    OH: 'KH2O',
  },
  UH: {
    OH: 'UH2O',
  },
  LO: {
    OH: 'LHO2',
  },
  ZO: {
    OH: 'ZHO2',
  },
  KO: {
    OH: 'KHO2',
  },
  UO: {
    OH: 'UHO2',
  },
  GO: {
    OH: 'GHO2',
  },
  LH2O: {
    X: 'XLH2O',
  },
  KH2O: {
    X: 'XKH2O',
  },
  ZH2O: {
    X: 'XZH2O',
  },
  UH2O: {
    X: 'XUH2O',
  },
  GH2O: {
    X: 'XGH2O',
  },
  LHO2: {
    X: 'XLHO2',
  },
  UHO2: {
    X: 'XUHO2',
  },
  KHO2: {
    X: 'XKHO2',
  },
  ZHO2: {
    X: 'XZHO2',
  },
  GHO2: {
    X: 'XGHO2',
  },
};

global.BOOSTS = {
  work: {
    UO: {
      harvest: 3,
    },
    UHO2: {
      harvest: 5,
    },
    XUHO2: {
      harvest: 7,
    },
    LH: {
      build: 1.5,
      repair: 1.5,
    },
    LH2O: {
      build: 1.8,
      repair: 1.8,
    },
    XLH2O: {
      build: 2,
      repair: 2,
    },
    ZH: {
      dismantle: 2,
    },
    ZH2O: {
      dismantle: 3,
    },
    XZH2O: {
      dismantle: 4,
    },
    GH: {
      upgradeController: 1.5,
    },
    GH2O: {
      upgradeController: 1.8,
    },
    XGH2O: {
      upgradeController: 2,
    },
  },
  attack: {
    UH: {
      attack: 2,
    },
    UH2O: {
      attack: 3,
    },
    XUH2O: {
      attack: 4,
    },
  },
  ranged_attack: {
    KO: {
      rangedAttack: 2,
      rangedMassAttack: 2,
    },
    KHO2: {
      rangedAttack: 3,
      rangedMassAttack: 3,
    },
    XKHO2: {
      rangedAttack: 4,
      rangedMassAttack: 4,
    },
  },
  heal: {
    LO: {
      heal: 2,
      rangedHeal: 2,
    },
    LHO2: {
      heal: 3,
      rangedHeal: 3,
    },
    XLHO2: {
      heal: 4,
      rangedHeal: 4,
    },
  },
  carry: {
    KH: {
      capacity: 2,
    },
    KH2O: {
      capacity: 3,
    },
    XKH2O: {
      capacity: 4,
    },
  },
  move: {
    ZO: {
      fatigue: 2,
    },
    ZHO2: {
      fatigue: 3,
    },
    XZHO2: {
      fatigue: 4,
    },
  },
  tough: {
    GO: {
      damage: 0.7,
    },
    GHO2: {
      damage: 0.5,
    },
    XGHO2: {
      damage: 0.3,
    },
  },
};

global.PORTAL_UNSTABLE = 10 * 24 * 3600 * 1000;
global.PORTAL_MIN_TIMEOUT = 12 * 24 * 3600 * 1000;
global.PORTAL_MAX_TIMEOUT = 22 * 24 * 3600 * 1000;

global.POWER_BANK_RESPAWN_TIME = 50000;

global.INVADERS_ENERGY_GOAL = 100000;

global.SYSTEM_USERNAME = 'Screeps';

global.SIGN_NOVICE_AREA =
  'A new Novice Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';
global.SIGN_RESPAWN_AREA =
  'A new Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

global.BODYPARTS_ALL = [
  MOVE,
  WORK,
  CARRY,
  ATTACK,
  RANGED_ATTACK,
  TOUGH,
  HEAL,
  CLAIM,
];

global.RESOURCES_ALL = [
  RESOURCE_ENERGY,
  RESOURCE_POWER,

  RESOURCE_HYDROGEN,
  RESOURCE_OXYGEN,
  RESOURCE_UTRIUM,
  RESOURCE_KEANIUM,
  RESOURCE_LEMERGIUM,
  RESOURCE_ZYNTHIUM,
  RESOURCE_CATALYST,
  RESOURCE_GHODIUM,

  RESOURCE_HYDROXIDE,
  RESOURCE_ZYNTHIUM_KEANITE,
  RESOURCE_UTRIUM_LEMERGITE,

  RESOURCE_UTRIUM_HYDRIDE,
  RESOURCE_UTRIUM_OXIDE,
  RESOURCE_KEANIUM_HYDRIDE,
  RESOURCE_KEANIUM_OXIDE,
  RESOURCE_LEMERGIUM_HYDRIDE,
  RESOURCE_LEMERGIUM_OXIDE,
  RESOURCE_ZYNTHIUM_HYDRIDE,
  RESOURCE_ZYNTHIUM_OXIDE,
  RESOURCE_GHODIUM_HYDRIDE,
  RESOURCE_GHODIUM_OXIDE,

  RESOURCE_UTRIUM_ACID,
  RESOURCE_UTRIUM_ALKALIDE,
  RESOURCE_KEANIUM_ACID,
  RESOURCE_KEANIUM_ALKALIDE,
  RESOURCE_LEMERGIUM_ACID,
  RESOURCE_LEMERGIUM_ALKALIDE,
  RESOURCE_ZYNTHIUM_ACID,
  RESOURCE_ZYNTHIUM_ALKALIDE,
  RESOURCE_GHODIUM_ACID,
  RESOURCE_GHODIUM_ALKALIDE,

  RESOURCE_CATALYZED_UTRIUM_ACID,
  RESOURCE_CATALYZED_UTRIUM_ALKALIDE,
  RESOURCE_CATALYZED_KEANIUM_ACID,
  RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
  RESOURCE_CATALYZED_LEMERGIUM_ACID,
  RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
  RESOURCE_CATALYZED_ZYNTHIUM_ACID,
  RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
  RESOURCE_CATALYZED_GHODIUM_ACID,
  RESOURCE_CATALYZED_GHODIUM_ALKALIDE,
];

global.COLORS_ALL = [
  COLOR_RED,
  COLOR_PURPLE,
  COLOR_BLUE,
  COLOR_CYAN,
  COLOR_GREEN,
  COLOR_YELLOW,
  COLOR_ORANGE,
  COLOR_BROWN,
  COLOR_GREY,
  COLOR_WHITE,
];
