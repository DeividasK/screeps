import { canBuildOn } from './canBuildOn';

describe('canBuildOn', () => {
  const structuresArray = [
    {
      x: 31,
      y: 44,
      type: 'structure',
      structure: {
        structureType: 'spawn',
      },
    },
    {
      x: 31,
      y: 44,
      type: 'structure',
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

  it('should return false if structure is found in that position', () => {
    const fakeStructuresArray = structuresArray.concat(structuresArray);

    const fakeRoom = {
      lookForAt: jest.fn(() => structuresArray.slice(0, 1)),
    };

    const roomPosition = { x: 0, y: 0 };
    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return false if construction site is found in that position', () => {
    const fakeStructuresArray = structuresArray.concat(structuresArray);

    const fakeRoom = {
      lookForAt: jest.fn(() => constructionSitesArray),
    };

    const roomPosition = { x: 0, y: 0 };
    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return false if the area has at least 1 energy source ', () => {
    const hardObstaclesArray = [
      {
        x: 28,
        y: 35,
        type: 'source',
        source: {},
      },
    ];

    const fakeRoom = {
      lookForAt: jest.fn(() => []),
      lookAtArea: jest.fn(() => hardObstaclesArray),
    };

    const roomPosition = { x: 0, y: 0 };
    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return false if the area has at least 1 mineral ', () => {
    const hardObstaclesArray = [
      {
        x: 28,
        y: 35,
        type: 'mineral',
        mineral: {},
      },
    ];

    const fakeRoom = {
      lookForAt: jest.fn(() => []),
      lookAtArea: jest.fn(() => hardObstaclesArray),
    };

    const roomPosition = { x: 0, y: 0 };
    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return false if the area has more than 1 structure ', () => {
    const fakeStructuresArray = structuresArray.concat(structuresArray);

    const fakeRoom = {
      lookForAt: jest.fn(() => []),
      lookAtArea: jest.fn(() => fakeStructuresArray),
    };

    const roomPosition = { x: 0, y: 0 };
    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return false if area has more than 1 structure and/or construction site', () => {
    const fakeRoom = {
      lookForAt: jest.fn(() => []),
      lookAtArea: jest.fn(() =>
        structuresArray.concat(constructionSitesArray, constructionSitesArray),
      ),
    };

    const roomPosition = { x: 0, y: 0 };
    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return false if area has more than 1 obstacle', () => {
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
      lookForAt: jest.fn(() => []),
      lookAtArea: jest.fn(() => [
        ...structuresArray,
        ...constructionSitesArray,
        ...terrainArray,
      ]),
    };
    const roomPosition = { x: 0, y: 0 };

    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(false);
  });

  it('should return true if area has 1 or less obstacles', () => {
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
      lookForAt: jest.fn(() => []),
      lookAtArea: jest.fn(() => [...terrainArray]),
    };
    const roomPosition = { x: 0, y: 0 };

    expect(canBuildOn(fakeRoom, roomPosition)).toEqual(true);
  });
});
