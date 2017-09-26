// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import {
  getNextCreepSchema,
  processQueue,
  createConstructionSites,
} from 'structures/actions';
import _ from 'lodash';

function loop() {
  memoryHandler.update(Memory);

  const nextCreepSchema: CreepSchema = getNextCreepSchema(
    Memory,
    Game.spawns['Spawn1'],
  );

  createConstructionSites(STRUCTURE_EXTENSION, Game);

  // JSON.stringify(_.values(Game.rooms)[0].lookForAtArea(LOOK_STRUCTURES, 43, 30, 45, 32, true))
  // JSON.stringify(_.values(Game.rooms)[0].lookForAtArea(LOOK_TERRAIN, 43, 30, 45, 32, true))
  // JSON.stringify(_.values(Game.rooms)[0].lookAtArea(35, 28, 37, 39, true))
  const st = [
    {
      x: 28,
      y: 35,
      type: 'source',
      source: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 28, y: 35, roomName: 'W7S56' },
        id: '59bbc48b2052a716c3ce81ba',
        energy: 3000,
        energyCapacity: 3000,
      },
    },
    {
      x: 31,
      y: 35,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 31, y: 35, roomName: 'W7S56' },
        id: '59cab5349b5d3914176ee3c9',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    {
      x: 33,
      y: 35,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 33, y: 35, roomName: 'W7S56' },
        id: '59cab5366c301f0e509c7377',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    {
      x: 35,
      y: 35,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 35, y: 35, roomName: 'W7S56' },
        id: '59cab539d9f10b31d75660ad',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    {
      x: 37,
      y: 35,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 37, y: 35, roomName: 'W7S56' },
        id: '59cab53b8195221821c5a7cf',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    {
      x: 39,
      y: 35,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 39, y: 35, roomName: 'W7S56' },
        id: '59cab53e27ca4145b7d35930',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    {
      x: 29,
      y: 36,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 29, y: 36, roomName: 'W7S56' },
        id: '59cab5447e60c90e8fb0f69b',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    {
      x: 30,
      y: 36,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 30, y: 36, roomName: 'W7S56' },
        id: '59cab547dbc106341bea7cb3',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    {
      x: 31,
      y: 36,
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 227,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 31, y: 36, roomName: 'W7S56' },
        id: '59cab54994c30f45add769c5',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
    },
    { type: 'terrain', terrain: 'wall', x: 28, y: 35 },
    { type: 'terrain', terrain: 'wall', x: 29, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 30, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 31, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 32, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 33, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 34, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 35, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 36, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 37, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 38, y: 35 },
    { type: 'terrain', terrain: 'plain', x: 39, y: 35 },
    { type: 'terrain', terrain: 'wall', x: 28, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 29, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 30, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 31, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 32, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 33, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 34, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 35, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 36, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 37, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 38, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 39, y: 36 },
    { type: 'terrain', terrain: 'plain', x: 28, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 29, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 30, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 31, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 32, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 33, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 34, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 35, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 36, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 37, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 38, y: 37 },
    { type: 'terrain', terrain: 'plain', x: 39, y: 37 },
  ];

  /*

  // Find empty space to build on

  for each item in area check check surounding area (3 x 3 total) and see if more than 3 terrain squares are available
  if yes, build a construction site for spawn


  */

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema, Memory);
  }
  processQueue(Memory, Game.spawns['Spawn1']);

  initRoles(Game);
}

export { loop };

// Goals
// - Update upgrader role to harvest instead of withdrawing
// - Automatically add extension construction sites
// - Updae builder role to harvest instead of withdrawing
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available
