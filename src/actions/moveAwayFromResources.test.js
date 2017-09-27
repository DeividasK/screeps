import moveAwayFromResources from './moveAwayFromResources';

describe('moveAwayFromResources', () => {
  const areaWithObstacles = [{ type: 'source' }];
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
      },
      move: jest.fn(() => OK),
    };

    expect(moveAwayFromResources(fakeCreep)).toBe(true);
  });

  it('should try all directions and return false if no direction is available to move to', () => {
    const move = jest.fn(() => ERR_INVALID_ARGS);
    const fakeCreep = {
      pos: {
        x: 1,
        y: 1,
      },
      room: {
        lookAtArea: jest.fn(() => areaWithObstacles),
      },
      move: move,
    };

    expect(moveAwayFromResources(fakeCreep)).toBe(false);
    expect(move).toHaveBeenCalledTimes(8);
  });

  it('should return false immediately on any other error code', () => {
    const move = jest.fn(() => ERR_TIRED);
    const fakeCreep = {
      pos: {
        x: 1,
        y: 1,
      },
      room: {
        lookAtArea: jest.fn(() => areaWithObstacles),
      },
      move: move,
    };

    expect(moveAwayFromResources(fakeCreep)).toBe(false);
    expect(move).toHaveBeenCalledTimes(1);
  });
});
