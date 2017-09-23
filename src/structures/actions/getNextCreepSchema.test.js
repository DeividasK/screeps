import { getNextCreepSchema, findNextCreepRole } from './getNextCreepSchema';

describe('findNextCreepRole', () => {
  it('should return a role where existing creeps count is smaller than required creeps count', () => {
    const fakeRoles = ['harvester'];
    const fakeMemory = {
      roles: {
        harvester: 2,
      },
      creeps: {
        Creep1: {
          memory: {
            role: 'builder',
          },
        },
        Creep2: {
          memory: {
            role: 'harvester',
          },
        },
      },
    };
    const nextCreepRole = findNextCreepRole(fakeRoles, fakeMemory);
    expect(nextCreepRole).toBe('harvester');
  });

  it('should return a role when there are no existing creeps', () => {
    const fakeRoles = ['harvester'];
    const fakeMemory = {
      roles: {
        harvester: 2,
      },
      creeps: {},
    };
    const nextCreepRole = findNextCreepRole(fakeRoles, fakeMemory);
    expect(nextCreepRole).toBe('harvester');
  });

  it('should return undefined where existing creeps count is equal to the required creeps count', () => {
    const fakeRoles = ['harvester'];
    const fakeMemory = {
      roles: {
        harvester: 1,
      },
      creeps: {
        Creep1: {
          role: 'harvester',
        },
        Creep2: {
          role: 'builder',
        },
      },
    };
    const nextCreepRole = findNextCreepRole(fakeRoles, fakeMemory);
    expect(nextCreepRole).toBe(undefined);
  });
});

describe('getNextCreepSchema', () => {
  it('should return if spawn is still spawning', () => {
    const fakeMemory = {};
    const fakeSpawn = {
      spawning: {
        name: 'Creep1',
        needTime: 9,
        remainingTime: 8,
      },
    };
    expect(getNextCreepSchema(fakeMemory, fakeSpawn)).toEqual(undefined);
  });

  it('should throw an error if there are no roles in memory', () => {
    const fakeMemory = {};
    const fakeSpawn = {};
    expect(() => {
      getNextCreepSchema(fakeMemory, fakeSpawn);
    }).toThrow();
  });

  it('should return if no creeps are required', () => {
    const fakeMemory = { roles: { harvester: 0 }, creeps: {} };
    const fakeSpawn = {
      spawning: null,
      room: { energyCapacityAvailable: 300 },
    };
    expect(getNextCreepSchema(fakeMemory, fakeSpawn)).toEqual(undefined);
  });

  it('should return nextCreepSchema if all checks pass', () => {
    const fakeMemory = { roles: { harvester: 1 }, creeps: {} };
    const fakeSpawn = {
      spawning: null,
      room: { energyCapacityAvailable: 300 },
    };
    expect(getNextCreepSchema(fakeMemory, fakeSpawn)).toEqual({
      role: 'harvester',
      body: [WORK, CARRY, MOVE],
    });
  });
});
