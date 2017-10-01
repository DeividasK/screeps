import { getNextCreepSchema, findNextCreepRole } from './getNextCreepSchema';
jest.mock('./assignBody', () => ({
  assignBody: jest.fn(() => ['mockedBody']),
}));

describe('findNextCreepRole', () => {
  it('should return a role where existing creeps count is smaller than required creeps count', () => {
    const fakeRoles = ['harvester'];
    const fakeMemory = {
      queue: [],
      roles: {
        harvester: 2,
      },
      creeps: {
        Creep1: {
          role: 'builder',
        },
        Creep2: {
          role: 'harvester',
        },
      },
    };
    const { nextCreepRole } = findNextCreepRole(fakeRoles, fakeMemory);
    expect(nextCreepRole).toBe('harvester');
  });

  it('should return a role when there are no existing creeps', () => {
    const fakeRoles = ['harvester'];
    const fakeMemory = {
      queue: [],
      roles: {
        harvester: 2,
      },
      creeps: {},
    };
    const { nextCreepRole, urgent } = findNextCreepRole(fakeRoles, fakeMemory);
    expect(nextCreepRole).toBe('harvester');
    expect(urgent).toEqual(true);
  });

  it('should return undefined where existing creeps count is equal to the required creeps count', () => {
    const fakeRoles = ['harvester'];
    const fakeMemory = {
      queue: [],
      roles: {
        harvester: 1,
        builder: 0,
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
    const { nextCreepRole } = findNextCreepRole(fakeRoles, fakeMemory);
    expect(nextCreepRole).toBe(undefined);
  });
});

describe('getNextCreepSchema', () => {
  it('should return if spawn is still spawning', () => {
    const fakeMemory = {
      queue: [],
    };
    const fakeSpawn = {
      spawning: {
        name: 'Creep1',
        needTime: 9,
        remainingTime: 8,
      },
    };
    expect(getNextCreepSchema(fakeMemory, fakeSpawn)).toEqual(undefined);
  });

  it('should return if queue is not empty', () => {
    const fakeMemory = {
      roles: { upgrader: 1 },
      queue: [{ body: '', role: '' }],
    };
    const fakeSpawn = {
      spawning: null,
    };
    expect(getNextCreepSchema(fakeMemory, fakeSpawn)).toEqual(undefined);
  });

  it('should return if no creeps are required', () => {
    const fakeMemory = {
      queue: [],
      roles: { harvester: 1 },
      creeps: {
        Creep1: {
          role: 'harvester',
        },
      },
    };
    const fakeSpawn = {
      spawning: null,
      room: { energyCapacityAvailable: 300 },
    };
    expect(getNextCreepSchema(fakeMemory, fakeSpawn)).toEqual(undefined);
  });

  it('should return nextCreepSchema if all checks pass', () => {
    const fakeMemory = {
      queue: [],
      roles: { harvester: 1 },
      creeps: {},
    };
    const fakeSpawn = {
      spawning: null,
      room: { energyCapacityAvailable: 300 },
    };
    expect(getNextCreepSchema(fakeMemory, fakeSpawn)).toEqual({
      role: 'harvester',
      body: ['mockedBody'],
    });
  });
});
