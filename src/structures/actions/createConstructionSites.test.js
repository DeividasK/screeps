import { createConstructionSites } from '.';
jest.mock('./canBuild', () => {
  return {
    canBuild: function canBuild(room, type) {
      if (type === 'extension') {
        return;
      }

      return 2;
    },
  };
});

describe('createConstructionSites', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  const Spawn1 = {
    pos: {
      x: 5,
      y: 5,
    },
    canCreateCreep: jest.fn(() => true),
  };

  const fakeGame = {
    rooms: {
      W7S56: {
        controller: {
          level: 3,
        },
        find: jest.fn(() => [Spawn1]),
        lookForAtArea: jest.fn(),
        createConstructionSites: jest.fn(),
      },
    },
    spawns: {
      Spawn1,
    },
  };

  it('should return if available amount for structure type is 0', () => {
    expect(createConstructionSites(STRUCTURE_EXTENSION, fakeGame)).toBe(false);
  });
});
