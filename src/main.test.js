import { loop } from './main';

describe('Main', () => {
  describe('if memory.queue array does not exist', () => {
    global.Game = {
      rooms: {
        W7S56: {
          controller: {
            level: 3,
          },
          find: jest.fn(() => []),
        },
      },
      spawns: {
        Spawn1: {
          spawning: null,
          room: {
            energyCapacityAvailable: 300,
          },
          canCreateCreep: jest.fn(() => true),
        },
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
        queue: [{ role: 'harvester', body: [WORK, CARRY, MOVE] }],
      });
    });
  });
});
