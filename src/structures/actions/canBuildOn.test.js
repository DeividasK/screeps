import { canBuildOn } from './canBuildOn';

describe('canBuildOn', () => {
  const structuresArray = [
    {
      x: 31,
      y: 44,
      structure: {
        structureType: 'spawn',
      },
    },
    {
      x: 31,
      y: 44,
      structure: {
        structureType: 'extension',
      },
    },
  ];

  it('should return false if the area has more than 3 structures ', () => {
    const fakeStructuresArray = structuresArray.concat(structuresArray);

    const fakeRoom = {
      lookForAtArea: jest.fn(() => fakeStructuresArray),
    };

    const roomPosition = { x: 0, y: 0, roomName: 'W7S56' };
    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return false if area has more than 3 obstacles', () => {
    const terrainArray = [
      { type: 'terrain', terrain: 'wall', x: 30, y: 41 },
      { type: 'terrain', terrain: 'wall', x: 31, y: 41 },
      { type: 'terrain', terrain: 'wall', x: 32, y: 41 },
      { type: 'terrain', terrain: 'wall', x: 30, y: 42 },
      { type: 'terrain', terrain: 'wall', x: 31, y: 42 },
      { type: 'terrain', terrain: 'plain', x: 32, y: 42 },
      { type: 'terrain', terrain: 'plain', x: 30, y: 43 },
      { type: 'terrain', terrain: 'plain', x: 31, y: 43 },
      { type: 'terrain', terrain: 'plain', x: 32, y: 43 },
    ];
    const fakeRoom = {
      lookForAtArea: jest.fn(type => {
        if (type === LOOK_STRUCTURES) {
          return structuresArray;
        }
        return terrainArray;
      }),
    };
    const roomPosition = { x: 0, y: 0, roomName: 'W7S56' };

    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return true if area has 3 or less obstacles', () => {
    const terrainArray = [
      { type: 'terrain', terrain: 'plain', x: 30, y: 41 },
      { type: 'terrain', terrain: 'plain', x: 31, y: 41 },
      { type: 'terrain', terrain: 'plain', x: 32, y: 41 },
      { type: 'terrain', terrain: 'plain', x: 30, y: 42 },
      { type: 'terrain', terrain: 'wall', x: 31, y: 42 },
      { type: 'terrain', terrain: 'plain', x: 32, y: 42 },
      { type: 'terrain', terrain: 'plain', x: 30, y: 43 },
      { type: 'terrain', terrain: 'plain', x: 31, y: 43 },
      { type: 'terrain', terrain: 'plain', x: 32, y: 43 },
    ];
    const fakeRoom = {
      lookForAtArea: jest.fn(type => {
        if (type === LOOK_STRUCTURES) {
          return structuresArray;
        }
        return terrainArray;
      }),
    };
    const roomPosition = { x: 0, y: 0, roomName: 'W7S56' };

    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(true);
  });
});
