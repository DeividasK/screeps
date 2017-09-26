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

  const constructionSitesArray = [
    {
      type: 'constructionSite',
      constructionSite: {
        room: {
          name: 'W7S56',
          energyAvailable: 261,
          energyCapacityAvailable: 300,
          visual: { roomName: 'W7S56' },
        },
        pos: { x: 31, y: 34, roomName: 'W7S56' },
        id: '59caabdb4406580e1b8f1aa7',
        progress: 0,
        progressTotal: 3000,
        structureType: 'extension',
        owner: { username: 'Deividas' },
        my: true,
      },
      x: 31,
      y: 34,
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

  it('should return false if area has more than 3 structures and/or construction sites', () => {
    const fakeRoom = {
      lookForAtArea: jest.fn(type => {
        switch (type) {
          case LOOK_STRUCTURES:
            return structuresArray;
          case LOOK_CONSTRUCTION_SITES:
            return constructionSitesArray.concat(constructionSitesArray);
        }
      }),
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
        switch (type) {
          case LOOK_STRUCTURES:
            return structuresArray;
          case LOOK_CONSTRUCTION_SITES:
            return constructionSitesArray;
          default:
            return terrainArray;
        }
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
      { type: 'terrain', terrain: 'plain', x: 31, y: 42 },
      { type: 'terrain', terrain: 'plain', x: 32, y: 42 },
      { type: 'terrain', terrain: 'plain', x: 30, y: 43 },
      { type: 'terrain', terrain: 'plain', x: 31, y: 43 },
      { type: 'terrain', terrain: 'plain', x: 32, y: 43 },
    ];
    const fakeRoom = {
      lookForAtArea: jest.fn(type => {
        switch (type) {
          case LOOK_STRUCTURES:
            return structuresArray;
          case LOOK_CONSTRUCTION_SITES:
            return constructionSitesArray;
          default:
            return terrainArray;
        }
      }),
    };
    const roomPosition = { x: 0, y: 0, roomName: 'W7S56' };

    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(true);
  });
});
