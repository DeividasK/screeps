import { loop } from './main';
jest.mock('structures/actions/createConstructionSites');
jest.mock('structures/actions/updateCreepCount');
jest.mock('structures/actions/assignBody', () => ({
  assignBody: jest.fn(() => ['mockedBody']),
}));

describe('Main', () => {
  describe('if memory.queue array does not exist', () => {
    const Spawn1 = {
      spawning: null,
      room: {
        energyCapacityAvailable: 300,
      },
      pos: {
        x: 5,
        y: 5,
      },
      canCreateCreep: jest.fn(() => true),
    };

    global.Game = {
      rooms: {
        W7S56: {
          controller: {
            level: 3,
          },
          find: jest.fn(() => [Spawn1]),
          lookForAtArea: jest.fn(),
        },
      },
      spawns: {
        Spawn1,
      },
    };

    it('should be added to memory', () => {
      global.Memory = {
        roles: {
          harvester: 1,
        },
        creeps: {},
        spawns: {},
      };
      loop();
      expect(Memory).toHaveProperty('queue');
    });

    it('should contain the first creep schema to produce', () => {
      expect(Memory).toMatchObject({
        queue: [{ role: 'harvester', body: ['mockedBody'] }],
      });
    });
  });
});
