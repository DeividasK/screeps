import moveAwayFromResources, { getPosition } from './moveAwayFromResources';

describe('getPosition', () => {
  it('should return a position based on direction', () => {
    expect(getPosition(TOP, 1, 1)).toEqual({ x: 1, y: 0 });
  });
});

describe('moveAwayFromResources', () => {
  const areaWithObstacles = [{ type: 'source' }];
  const positionWithoutObstacles = [{ type: 'terrain', terrain: 'swamp' }];

  const positionWithObstacle = [
    { type: 'creep', creep: {} },
    { type: 'structure', structure: {} },
    { type: 'terrain', terrain: 'wall' },
  ];
  it('should return false if no resources found in the surrounding area', () => {
    const fakeCreep = {
      pos: {
        x: 1,
        y: 1,
      },
      room: {
        lookAtArea: jest.fn(() => []),
      },
    };

    expect(moveAwayFromResources(fakeCreep)).toBe(false);
  });

  it('should return true if move in any direction is successful', () => {
    const fakeCreep = {
      pos: {
        x: 1,
        y: 1,
      },
      room: {
        lookAtArea: jest.fn(() => areaWithObstacles),
        lookAt: jest.fn(() => positionWithoutObstacles),
      },
      move: jest.fn(() => OK),
    };

    expect(moveAwayFromResources(fakeCreep)).toBe(true);
  });

  it('should try all directions and return false if no direction is available to move to', () => {
    const move = jest.fn(() => ERR_INVALID_ARGS);
    const lookAt = jest.fn(direction => positionWithObstacle);

    const fakeCreep = {
      pos: {
        x: 1,
        y: 1,
      },
      room: {
        lookAtArea: jest.fn(() => areaWithObstacles),
        lookAt,
      },
      move: move,
    };

    expect(moveAwayFromResources(fakeCreep)).toBe(false);
    expect(lookAt).toHaveBeenCalledTimes(8);
  });

  it('should return false immediately on any other error code', () => {
    const move = jest.fn(() => ERR_TIRED);
    const fakeCreep = {
      pos: {
        x: 1,
        y: 1,
      },
      room: {
        lookAt: jest.fn(() => positionWithoutObstacles),
        lookAtArea: jest.fn(() => areaWithObstacles),
      },
      move: move,
    };

    expect(moveAwayFromResources(fakeCreep)).toBe(false);
    expect(move).toHaveBeenCalledTimes(1);
  });
});
