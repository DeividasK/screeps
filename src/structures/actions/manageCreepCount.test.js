import { manageCreepCount } from './manageCreepCount';

describe('manageCreepCount', () => {
  it('should add builder to memory if none existed and construction sites were found', () => {
    const fakeMemory = {
      roles: {
        builder: 0,
        upgrader: 2,
      },
    };
    const fakeSpawn = {
      room: {
        find: jest.fn(() => [1]),
        storage: {
          store: {
            [RESOURCE_ENERGY]: 200000,
          },
        },
      },
    };

    manageCreepCount(fakeMemory, fakeSpawn);

    expect(fakeMemory.roles.builder).toEqual(1);
    expect(fakeMemory.roles.upgrader).toEqual(1);
  });

  it('should remove a builder from memory if no construction sites were found', () => {
    const fakeMemory = {
      roles: {
        builder: 1,
        upgrader: 1,
      },
    };
    const fakeSpawn = {
      room: {
        find: jest.fn(() => []),
        storage: {
          store: {
            [RESOURCE_ENERGY]: 600000,
          },
        },
      },
    };

    manageCreepCount(fakeMemory, fakeSpawn);

    expect(fakeMemory.roles.builder).toEqual(0);
    expect(fakeMemory.roles.upgrader).toEqual(2);
  });
});
