import { manageCreepCount } from './manageCreepCount';

describe('manageCreepCount', () => {
  it('should add builder to memory if none existed and construction sites were found', () => {
    const fakeMemory = {
      roles: {
        builder: 0,
      },
    };
    const fakeSpawn = {
      room: {
        find: jest.fn(() => [1]),
      },
    };

    manageCreepCount(fakeMemory, fakeSpawn);

    expect(fakeMemory.roles.builder).toEqual(1);
  });

  it('should remove a builder from memory if no construction sites were found', () => {
    const fakeMemory = {
      roles: {
        builder: 1,
      },
    };
    const fakeSpawn = {
      room: {
        find: jest.fn(() => []),
      },
    };

    manageCreepCount(fakeMemory, fakeSpawn);

    expect(fakeMemory.roles.builder).toEqual(0);
  });
});
